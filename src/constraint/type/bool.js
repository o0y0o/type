import { isBoolean } from 'lodash'
import constraint from '@util/createConstraint'

export default constraint('boolean', isBoolean)
