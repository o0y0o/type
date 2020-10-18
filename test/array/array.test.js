import t from '@lib'
import { validResult } from '../helper'

describe('type.array', () => {
  it('pass with undefined value', () => {
    const actual = t.array.validate(undefined)
    expect(actual).toEqual(validResult)
  })

  it('pass with null value', () => {
    const actual = t.array.validate(null)
    expect(actual).toEqual(validResult)
  })

  it('pass with any array', () => {
    const actual = t.array.validate([1, 2])
    expect(actual).toEqual(validResult)
  })

  it('fail with non-array value', () => {
    const actual = t.array.validate({})
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'array', actual: '{}' }]
    })
  })

  it('support extensions', () => {
    const actual = t.array.empty.required.validate([])
    expect(actual).toEqual(validResult)
  })
})
