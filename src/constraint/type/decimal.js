import { isString, overEvery } from 'lodash'
import constraint from '@util/createConstraint'

const regex = /^([+-])?(\d+)(?:\.(\d+))?$/

const isDecimal = overEvery(isString, value => regex.test(value))

const compareStr = (str1, str2) => (str1 === str2 ? 0 : str1 > str2 ? 1 : -1)

const compareInt = (int1, int2) => {
  const digit = Math.max(int1.length, int2.length)
  const fix = int => int.padStart(digit, '0')
  return compareStr(fix(int1), fix(int2))
}

const compareDec = (dec1, dec2, dp) => {
  if (dp == null) dp = Math.max(dec1.length, dec2.length)
  const fix = dec => dec.substring(0, dp).padEnd(dp, '0')
  return compareStr(fix(dec1), fix(dec2))
}

const compare = (num1, num2, dp) => {
  const [, sign1 = '+', int1, dec1 = ''] = regex.exec(num1)
  const [, sign2 = '+', int2, dec2 = ''] = regex.exec(num2)
  const sign = +`${sign1}1`
  if (sign1 !== sign2) return sign

  const cmp = compareInt(int1, int2) || compareDec(dec1, dec2, dp)
  return sign * cmp
}

const comparisons = {
  eq: (expected, dp) => actual => !compare(actual, expected, dp),
  neq: (expected, dp) => actual => !!compare(actual, expected, dp),
  gt: (expected, dp) => actual => compare(actual, expected, dp) > 0,
  gte: (expected, dp) => actual => compare(actual, expected, dp) >= 0,
  lt: (expected, dp) => actual => compare(actual, expected, dp) < 0,
  lte: (expected, dp) => actual => compare(actual, expected, dp) <= 0
}

const createComparisonConstraints = dp =>
  Object.entries(comparisons).reduce((constraints, [key, check]) => {
    const name = `${key}${dp ?? ''}`
    constraints[name] = expected =>
      constraint(`${name}(${expected})`, check(expected, dp))
    return constraints
  }, {})

const decCmp = createComparisonConstraints()

const decConstraint = constraint('decimal', isDecimal, decCmp)

decConstraint.extendComparisonsWithDp = dp =>
  decConstraint[`eq${dp ?? ''}`]
    ? decConstraint
    : decConstraint.extend(createComparisonConstraints(dp))

export default decConstraint
