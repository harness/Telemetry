import Analytics from '@segment/analytics.js-core/build/analytics'

// Hack to get around typescript errors from @segment/analytics.js-core/build/analytics misconfiguration
function getNewAnalytics() {
  return new Analytics()
}

export default getNewAnalytics
