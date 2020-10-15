import { isArray, isEqual, isMatch, isObject, negate, overEvery } from 'lodash'
import constraint from '@lib/util/constraint'
import { stringify } from '@lib/util/helper'

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
