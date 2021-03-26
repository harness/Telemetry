import { SegmentAnalytics } from '@segment/analytics.js-core';
import Track from './types/Track';
import Page from './types/Page';
declare class HarnessTelemetry {
    analytics: SegmentAnalytics.AnalyticsJS;
    initialized: boolean;
    constructor();
    initialize(writeKey?: string): void;
    checkInitialized(): boolean;
    identify(userId: string): void;
    track(track: Track): void;
    page(page: Page): void;
}
declare const Telemetry: HarnessTelemetry;
export default Telemetry;
