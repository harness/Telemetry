/*
 * Copyright 2021 Harness Inc. All rights reserved.
 * Use of this source code is governed by the PolyForm Shield 1.0.0 license
 * that can be found in the licenses directory at the root of this repository, also available at
 * https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

declare global {
  interface Window {
    analytics: any
  }
}

export default function initializeAnalytics(sourceKey: string): void {
  const analytics = (window.analytics = window.analytics || [])

  // If the real analytics.js is already on the page return.
  if (analytics.initialize) return

  // If the snippet was invoked already show an error.
  if (analytics.invoked) {
    if (window.console && console.error) {
      console.error('Segment snippet included twice.')
    }
    return
  }

  // Invoked flag, to make sure the snippet
  // is never invoked twice.
  analytics.invoked = true

  // A list of the methods in Analytics.js to stub.
  analytics.methods = [
    'trackSubmit',
    'trackClick',
    'trackLink',
    'trackForm',
    'pageview',
    'identify',
    'reset',
    'group',
    'track',
    'ready',
    'alias',
    'debug',
    'page',
    'once',
    'off',
    'on',
    'addSourceMiddleware',
    'addIntegrationMiddleware',
    'setAnonymousId',
    'addDestinationMiddleware'
  ]

  // Define a factory to create stubs. These are placeholders
  // for methods in Analytics.js so that you never have to wait
  // for it to load to actually record data. The `method` is
  // stored as the first argument, so we can replay the data.
  analytics.factory = function (method: (...args: any[]) => void) {
    return function (...functionArgs: any[]) {
      const args = Array.prototype.slice.call(functionArgs)
      args.unshift(method)
      analytics.push(args)
      return analytics
    }
  }

  // For each of our methods, generate a queueing stub.
  for (let i = 0; i < analytics.methods.length; i += 1) {
    const key = analytics.methods[i]
    analytics[key] = analytics.factory(key)
  }

  // Define a method to load Analytics.js from our CDN,
  // and that will be sure to only ever load it once.
  analytics.load = function (key: any, options: any) {
    // Create an async script element based on your key.
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = `https://cdn.segment.com/analytics.js/v1/${key}/analytics.min.js`

    // Insert our script next to the first script element.
    const first = document.getElementsByTagName('script')[0]
    first.parentNode?.insertBefore(script, first)
    analytics._loadOptions = options
  }

  // Add a version to keep track of what's in the wild.
  analytics.SNIPPET_VERSION = '4.1.0'

  // Load Analytics.js with your key, which will automatically
  // load the tools you've enabled for your account. Boosh!
  analytics.load(sourceKey)
}
