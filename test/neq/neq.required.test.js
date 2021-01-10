import t from '@lib'
import { validResult } from '../helper'

describe('type.neq.required', () => {
  it('pass with any non equality', () => {
    const actual = t.neq(1).required.validate(2)
    expect(actual).toEqual(validResult)
  })

  it('fail with undefined value', () => {
    const actual = t.neq(1).required.validate(undefined)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'required', actual: 'undefined' }]
    })
  })

  it('fail with null value', () => {
    const actual = t.neq(1).required.validate(null)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'required', actual: 'null' }]
    })
  })
})
