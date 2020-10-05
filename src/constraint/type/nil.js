import { isNil } from 'lodash'
import constraint from '@util/createConstraint'

export default constraint('nil', isNil)
