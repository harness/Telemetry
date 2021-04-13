import * as PageNames from 'types/PageNames';
import * as CategoryNames from 'types/CategoryNames';
interface Properties {
    [key: string]: string;
}
export default interface Page {
    name: PageNames.defaultSource;
    category: CategoryNames.defaultSource;
    properties: Properties;
}
export {};
//# sourceMappingURL=Page.d.ts.map