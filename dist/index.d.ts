import Track from './types/Track';
import Page from './types/Page';
import Group from './types/Group';
declare global {
    interface Window {
        analytics: any;
    }
}
export default class Telemetry {
    analytics: Window['analytics'];
    accountId?: string;
    initialized: boolean;
    statusInterval?: number;
    constructor(sourceKey?: string);
    set setAccountId(id: string);
    augmentProperties(properties: {
        [key: string]: string;
    }): {
        [key: string]: string;
    };
    updateInitializedStatus(): void;
    checkInitialized(): boolean;
    identify(userId: string): void;
    track(track: Track): void;
    page(page: Page): void;
    group(groupProperties: Group): void;
}
