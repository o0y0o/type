import t from '@lib'
import { validResult } from '../helper'

describe('type.string.required', () => {
  it('pass with any string', () => {
    const actual = t.string.required.validate('foo')
    expect(actual).toEqual(validResult)
  })

  it('fail with undefined value', () => {
    const actual = t.string.required.validate(undefined)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'required', actual: 'undefined' }]
    })
  })

  it('fail with null value', () => {
    const actual = t.string.required.validate(null)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'required', actual: 'null' }]
    })
  })
})
