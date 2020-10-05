import { isNumber } from 'lodash'
import constraint from '@util/createConstraint'
import numCmp from '@constraint/shared/numCmp'

export default constraint('number', isNumber, numCmp)
