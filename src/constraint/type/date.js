import { isDate, isNaN, negate, overEvery } from 'lodash'
import constraint from '@util/createConstraint'
import numCmp from '@constraint/shared/numCmp'

const isValidDate = overEvery(isDate, negate(isNaN))

export default constraint('date', isValidDate, numCmp)
