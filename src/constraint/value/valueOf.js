import constraint from '@lib/util/constraint'
import { jsonify } from '@lib/util/helper'

export default expected =>
  constraint(`valueOf(${jsonify(expected)})`, actual =>
    Object.values(expected).includes(actual)
  )
