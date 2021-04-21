declare global {
    interface Window {
        analytics: any;
    }
}
export default function initializeAnalytics(sourceKey: string): void;
