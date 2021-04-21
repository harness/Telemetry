interface Properties {
    [key: string]: string;
}
export default interface Track {
    event: string;
    properties: Properties;
}
export {};
