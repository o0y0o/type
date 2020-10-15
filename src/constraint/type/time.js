import { isNaN, isNil, mapValues } from 'lodash'
import constraint from '@lib/util/constraint'
import { stringify } from '@lib/util/helper'

const toTime = value => +new Date(value)

const isTime = value => !isNil(value) && !isNaN(toTime(value))

const comparisons = {
  eq: expected => actual => toTime(actual) === toTime(expected),
  neq: expected => actual => toTime(actual) !== toTime(expected),
  gt: expected => actual => toTime(actual) > toTime(expected),
  gte: expected => actual => toTime(actual) >= toTime(expected),
  lt: expected => actual => toTime(actual) < toTime(expected),
  lte: expected => actual => toTime(actual) <= toTime(expected)
}

const timeCmp = mapValues(comparisons, (check, name) => expected =>
  constraint(`${name}(${stringify(expected)})`, check(expected))
)

export default constraint('time', isTime, timeCmp)
