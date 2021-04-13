import * as EventNames from 'types/EventNames';
interface Properties {
    [key: string]: string;
}
export default interface Track {
    event: EventNames.defaultSource;
    properties: Properties;
}
export {};
//# sourceMappingURL=Track.d.ts.map