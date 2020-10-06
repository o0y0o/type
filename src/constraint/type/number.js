import { isNumber, mapValues } from 'lodash'
import constraint from '@util/createConstraint'

const comparisons = {
  eq: expected => actual => actual === expected,
  neq: expected => actual => actual !== expected,
  gt: expected => actual => actual > expected,
  gte: expected => actual => actual >= expected,
  lt: expected => actual => actual < expected,
  lte: expected => actual => actual <= expected
}

const numCmp = mapValues(comparisons, (check, name) => expected =>
  constraint(`${name}(${expected})`, check(expected))
)

export default constraint('number', isNumber, numCmp)
