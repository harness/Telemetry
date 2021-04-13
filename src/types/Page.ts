import * as PageNames from './PageNames'
import * as CategoryNames from './CategoryNames'

interface Properties {
  [key: string]: string
}

export default interface Page {
  name: PageNames.defaultSource
  category: CategoryNames.defaultSource
  properties: Properties
}
