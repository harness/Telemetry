import * as EventNames from 'types/EventNames'

interface Properties {
  [key: string]: string
}

export default interface Track {
  event: defaultSource
  properties: Properties
}
