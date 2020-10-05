import constraint from '@util/createConstraint'
import { stringify } from '@util/message'

export default expected =>
  constraint(`eq(${stringify(expected)})`, actual => actual === expected)
