import { isArray } from 'lodash'
import lenCmp from '@constraint/shared/lenCmp'
import constraint from '@lib/util/constraint'
import { stringify, joinPropPath } from '@lib/util/helper'

const toItemError = index => error => ({
  ...error,
  name: joinPropPath(`[${index}]`, error.name)
})

const is = expected =>
  constraint(`is(${expected})`, actual => {
    const errors = []
    for (let i = 0; i < expected.length; i++) {
      const result = expected[i].validate(actual[i])
      errors.push(...result.errors.map(toItemError(i)))
    }
    for (let i = expected.length; i < actual.length; i++) {
      errors.push({
        name: `[${i}]`,
        expected: 'undeclared',
        actual: stringify(actual[i])
      })
    }
    return errors
  })

const of = expected =>
  constraint(`of(${expected})`, actual =>
    actual.flatMap((actualItem, i) =>
      expected.validate(actualItem).errors.map(toItemError(i))
    )
  )

export default constraint('array', isArray, { is, of, ...lenCmp })
