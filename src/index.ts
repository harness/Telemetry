import Track from './types/Track'
import Page from './types/Page'

import initializeAnalytics from './analytics'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    analytics: any
  }
}

function isInitialized(): boolean {
  return typeof window.analytics !== 'undefined' && typeof window.analytics?.initialize !== 'undefined'
}

export default class Telemetry {
  analytics: Window['analytics']
  accountId?: string
  initialized: boolean
  statusInterval?: number

  constructor(sourceKey?: string) {
    if (sourceKey) {
      initializeAnalytics(sourceKey)
    }

    this.analytics = window.analytics
    this.initialized = isInitialized()

    if (!this.initialized && typeof window !== 'undefined') {
      this.statusInterval = window.setInterval(this.updateInitializedStatus, 1000)
    }
  }

  set setAccountId(id: string) {
    this.accountId = id
  }

  augmentProperties(properties: { [key: string]: string }): { [key: string]: string } {
    if (this.accountId) {
      return {
        ...properties,
        url: window.location.href,
        accountId: this.accountId
      }
    }

    return {
      ...properties,
      url: window.location.href
    }
  }

  updateInitializedStatus(): void {
    if (isInitialized()) {
      this.initialized = true
      this.analytics = window.analytics
    }

    clearInterval(this.statusInterval)
  }

  checkInitialized(): boolean {
    if (this.initialized) {
      return true
    }

    // eslint-disable-next-line no-console
    console.error('The telemetry package needs to be initialized before calling analytics methods')

    return false
  }

  identify(userId: string): void {
    if (this.checkInitialized()) {
      this.analytics.identify(userId, null, {}, {})
    }
  }

  track(track: Track): void {
    if (this.checkInitialized()) {
      const { event, properties } = track

      const augmentedProperties = this.augmentProperties(properties)

      this.analytics.track(event, augmentedProperties, {}, {})
    }
  }

  page(page: Page): void {
    if (this.checkInitialized()) {
      const { name, category, properties } = page

      const augmentedProperties = this.augmentProperties(properties)

      this.analytics.page(category, name, augmentedProperties, {}, {})
    }
  }
}
