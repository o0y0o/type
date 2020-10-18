import t from '@lib'
import { validResult } from '../helper'

describe('type.bool.required', () => {
  it('pass with any bool', () => {
    const actual = t.bool.required.validate(true)
    expect(actual).toEqual(validResult)
  })

  it('fail with undefined value', () => {
    const actual = t.bool.required.validate(undefined)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'required', actual: 'undefined' }]
    })
  })

  it('fail with null value', () => {
    const actual = t.bool.required.validate(null)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'required', actual: 'null' }]
    })
  })
})
