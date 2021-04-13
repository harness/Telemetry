import * as EventNames from './EventNames'

interface Properties {
  [key: string]: string
}

export default interface Track {
  event: EventNames.defaultSource
  properties: Properties
}
