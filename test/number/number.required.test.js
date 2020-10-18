import t from '@lib'
import { validResult } from '../helper'

describe('type.number.required', () => {
  it('pass with any number', () => {
    const actual = t.number.required.validate(1)
    expect(actual).toEqual(validResult)
  })

  it('fail with undefined value', () => {
    const actual = t.number.required.validate(undefined)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'required', actual: 'undefined' }]
    })
  })

  it('fail with null value', () => {
    const actual = t.number.required.validate(null)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'required', actual: 'null' }]
    })
  })
})
