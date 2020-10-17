import constraint from '@lib/util/constraint'
import { jsonify } from '@lib/util/helper'

export default expected =>
  constraint(`oneOf(${jsonify(expected)})`, actual => expected.includes(actual))
