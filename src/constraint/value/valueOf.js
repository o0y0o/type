import constraint from '@util/createConstraint'
import { stringify } from '@util/message'

export default expected =>
  constraint(`valueOf(${stringify(expected)})`, actual =>
    Object.values(expected).includes(actual)
  )
