import constraint from '@lib/util/constraint'
import { stringify } from '@lib/util/helper'

export default expected =>
  constraint(`oneOf(${stringify(expected)})`, actual =>
    expected.includes(actual)
  )
