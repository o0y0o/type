import { isString } from 'lodash'
import constraint from '@util/createConstraint'
import lenCmp from '@constraint/shared/lenCmp'

export default constraint('string', isString, {
  ...lenCmp,
  match: regex => constraint(`match(${regex})`, actual => regex.test(actual))
})
