import constraint from '@lib/util/constraint'
import { stringify } from '@lib/util/helper'

export default expected =>
  constraint(`valueOf(${stringify(expected)})`, actual =>
    Object.values(expected).includes(actual)
  )
