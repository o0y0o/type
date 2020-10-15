import constraint from '@lib/util/constraint'
import { stringify } from '@lib/util/helper'

export default expected =>
  constraint(`eq(${stringify(expected)})`, actual => actual === expected)
