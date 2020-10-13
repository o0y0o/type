import { isArray } from 'lodash'
import lenCmp from '@constraint/shared/lenCmp'
import constraint from '@util/createConstraint'
import { joinPropPath } from '@util/message'

const of = expected =>
  constraint(`of(${expected})`, actual => {
    if (isArray(expected)) {
      const result = lenCmp(expected.length).validate(actual)
      if (!result.valid) return result
    }
    return actual.flatMap((actualItem, index) => {
      const expectedItem = isArray(expected) ? expected[index] : expected
      return expectedItem.validate(actualItem).errors.map(error => ({
        ...error,
        name: joinPropPath(`[${index}]`, error.name)
      }))
    })
  })

export default constraint('array', isArray, { of, ...lenCmp })
