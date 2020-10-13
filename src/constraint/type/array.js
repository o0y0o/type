import { isArray } from 'lodash'
import lenCmp from '@constraint/shared/lenCmp'
import constraint from '@util/createConstraint'

export default constraint('array', isArray, lenCmp)
