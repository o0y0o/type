import { isString } from 'lodash'
import lenCmp from '@constraint/shared/lenCmp'
import constraint from '@util/createConstraint'

export default constraint('string', isString, {
  ...lenCmp,
  match: regex => constraint(`match(${regex})`, actual => regex.test(actual))
})
