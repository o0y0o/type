import t from '@lib'
import { validResult } from '../helper'

describe('type.valueOf.required', () => {
  it('pass with any contained value', () => {
    const actual = t.valueOf({ a: 1, b: 2 }).required.validate(1)
    expect(actual).toEqual(validResult)
  })

  it('fail with undefined value', () => {
    const actual = t.valueOf({ a: 1, b: 2 }).required.validate(undefined)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'required', actual: 'undefined' }]
    })
  })

  it('fail with null value', () => {
    const actual = t.valueOf({ a: 1, b: 2 }).required.validate(null)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'required', actual: 'null' }]
    })
  })
})
