/*
 * Copyright 2021 Harness Inc. All rights reserved.
 * Use of this source code is governed by the PolyForm Shield 1.0.0 license
 * that can be found in the licenses directory at the root of this repository, also available at
 * https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */

interface Properties {
  [key: string]: string
}

export default interface Page {
  name: string
  category?: string
  properties: Properties
  options?: Record<string, string>
  callback?: () => void
}
