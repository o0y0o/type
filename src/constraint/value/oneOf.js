import constraint from '@util/createConstraint'
import { stringify } from '@util/message'

export default expected =>
  constraint(`oneOf(${stringify(expected)})`, actual =>
    expected.includes(actual)
  )
