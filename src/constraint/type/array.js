import { isArray } from 'lodash'
import lenCmp from '@constraint/shared/lenCmp'
import constraint from '@lib/util/constraint'
import { jsonify, joinErrorName } from '@lib/util/helper'

const is = expected =>
  constraint(`is(${jsonify(expected)})`, (actual, context) => {
    const errors = []
    for (let i = 0; i < expected.length; i++) {
      const result = expected[i].validate(actual[i], context)
      errors.push(...result.errors.map(joinErrorName(`[${i}]`)))
    }
    for (let i = expected.length; i < actual.length; i++) {
      errors.push({
        name: `[${i}]`,
        expected: 'undeclared',
        actual: jsonify(actual[i])
      })
    }
    return errors
  })

const of = expected =>
  constraint(`of(${expected})`, (actual, context) =>
    actual.flatMap((actualItem, i) =>
      expected.validate(actualItem, context).errors.map(joinErrorName(`[${i}]`))
    )
  )

export default constraint('array', isArray, { is, of, ...lenCmp })
