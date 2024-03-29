import t from '@lib'
import { validResult } from '../helper'

describe('type.oneOf.required', () => {
  it('pass with any included value', () => {
    const actual = t.oneOf([1, 2]).required.validate(1)
    expect(actual).toEqual(validResult)
  })

  it('fail with undefined value', () => {
    const actual = t.oneOf([1, 2]).required.validate(undefined)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'required', actual: 'undefined' }]
    })
  })

  it('fail with null value', () => {
    const actual = t.oneOf([1, 2]).required.validate(null)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'required', actual: 'null' }]
    })
  })
})
