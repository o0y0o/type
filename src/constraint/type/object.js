import {
  isArray,
  isEqual,
  isMatch,
  isObject,
  keys,
  negate,
  overEvery,
  pull
} from 'lodash'
import constraint from '@lib/util/constraint'
import { jsonify, joinErrorName } from '@lib/util/helper'

const eq = expected =>
  constraint(`eq(${jsonify(expected)})`, actual => isEqual(actual, expected))

const match = expected =>
  constraint(`match(${jsonify(expected)})`, actual => isMatch(actual, expected))

const checkShape = (expected, strict) => (actual, context) => {
  context = { ...context, parent: { value: actual, parent: context?.parent } }
  const errors = []
  const objKeys = keys(actual)
  for (const [expectedKey, expectedValue] of Object.entries(expected)) {
    pull(objKeys, expectedKey)
    const result = expectedValue.validate(actual[expectedKey], context)
    if (result.valid) continue
    errors.push(...result.errors.map(joinErrorName(expectedKey)))
  }
  if (strict) {
    for (const restObjKey of objKeys) {
      errors.push({
        name: restObjKey,
        expected: 'undeclared',
        actual: jsonify(actual[restObjKey])
      })
    }
  }
  return errors
}

const is = expected =>
  constraint(`is(${jsonify(expected)})`, checkShape(expected, true))

const like = expected =>
  constraint(`like(${jsonify(expected)})`, checkShape(expected))

export default constraint('object', overEvery(isObject, negate(isArray)), {
  eq,
  match,
  is,
  like
})
