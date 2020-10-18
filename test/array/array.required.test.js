import t from '@lib'
import { validResult } from '../helper'

describe('type.array.required', () => {
  it('pass with any array', () => {
    const actual = t.array.required.validate([])
    expect(actual).toEqual(validResult)
  })

  it('fail with undefined value', () => {
    const actual = t.array.required.validate(undefined)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'required', actual: 'undefined' }]
    })
  })

  it('fail with null value', () => {
    const actual = t.array.required.validate(null)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'required', actual: 'null' }]
    })
  })
})
