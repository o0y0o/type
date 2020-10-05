import { isArray } from 'lodash'
import constraint from '@util/createConstraint'
import lenCmp from '@constraint/shared/lenCmp'

export default constraint('array', isArray, lenCmp)
