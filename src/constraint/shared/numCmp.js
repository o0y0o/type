import { mapValues } from 'lodash'
import constraint from '@util/createConstraint'
import { stringify } from '@util/message'

const comparisons = {
  eq: expected => actual => +actual === +expected,
  neq: expected => actual => +actual !== +expected,
  gt: expected => actual => +actual > +expected,
  gte: expected => actual => +actual >= +expected,
  lt: expected => actual => +actual < +expected,
  lte: expected => actual => +actual <= +expected
}

export default mapValues(comparisons, (check, name) => expected =>
  constraint(`${name}(${stringify(expected)})`, check(expected))
)
