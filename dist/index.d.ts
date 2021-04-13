import Track from './types/Track';
import Page from './types/Page';
declare global {
    interface Window {
        analytics: any;
    }
}
export default class Telemetry {
    analytics: Window['analytics'];
    initialized: boolean;
    statusInterval?: number;
    constructor();
    updateInitializedStatus(): void;
    checkInitialized(): boolean;
    identify(userId: string): void;
    track(track: Track): void;
    page(page: Page): void;
}
//# sourceMappingURL=index.d.ts.map