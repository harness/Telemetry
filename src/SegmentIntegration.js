import SegmentIntegration from '@segment/analytics.js-integration-segmentio'

// Hack to get around typescript errors from @segment/analytics.js-integration-segmentio misconfiguration
const integration = SegmentIntegration

export default integration
