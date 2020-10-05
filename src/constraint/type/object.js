import { isArray, isEqual, isMatch, isObject, negate, overEvery } from 'lodash'
import constraint from '@util/createConstraint'
import { stringify } from '@util/message'

export default constraint('object', overEvery(isObject, negate(isArray)), {
  eq: expected =>
    constraint(`eq(${stringify(expected)})`, actual =>
      isEqual(actual, expected)
    ),
  match: expected =>
    constraint(`match(${stringify(expected)})`, actual =>
      isMatch(actual, expected)
    )
})
