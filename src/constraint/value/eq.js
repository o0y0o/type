import constraint from '@lib/util/constraint'
import { jsonify } from '@lib/util/helper'

export default expected =>
  constraint(`eq(${jsonify(expected)})`, actual => actual === expected)
