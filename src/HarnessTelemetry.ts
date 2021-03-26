import { SegmentAnalytics } from '@segment/analytics.js-core'
import getNewAnalytics from './SegmentAnalytics'
import integration from './SegmentIntegration'
import Track from './types/Track'
import Page from './types/Page'

class HarnessTelemetry {
  analytics: SegmentAnalytics.AnalyticsJS
  initialized: boolean

  constructor() {
    this.analytics = getNewAnalytics()
    this.analytics.use(integration)
    this.initialized = false
  }

  initialize(writeKey?: string): void {
    const integrationSettings = {
      'Segment.io': {
        apiKey: writeKey || 'Exm5NxARVDS59iIK5o3KTq0LeUik92WA',
        retryQueue: true,
        addBundledMetadata: true
      }
    }

    this.analytics.initialize(integrationSettings)
    this.initialized = true
  }

  checkInitialized(): boolean {
    if (this.initialized) {
      return true
    }

    // eslint-disable-next-line no-console
    console.error('Initialize the telemetry package before calling analytics methods')

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

      this.analytics.track(event, properties, {}, {})
    }
  }

  page(page: Page): void {
    if (this.checkInitialized()) {
      const { name, category, properties } = page
      this.analytics.page(category, name, properties, {}, {})
    }
  }
}

export { HarnessTelemetry }
