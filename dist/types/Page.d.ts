interface Properties {
    [key: string]: string;
}
export default interface Page {
    name: string;
    category?: string;
    properties: Properties;
}
export {};
