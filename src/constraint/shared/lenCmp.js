import { isEmpty, negate } from 'lodash'
import constraint from '@lib/util/constraint'

export default {
  lenEq: len => constraint(`lenEq(${len})`, actual => actual?.length === len),
  empty: constraint('empty', isEmpty),
  notEmpty: constraint('notEmpty', negate(isEmpty))
}
