import t from '@lib'
import { validResult } from '../helper'

describe('type.decimal.required', () => {
  it('pass with any decimal', () => {
    const actual = t.decimal.required.validate('1.98')
    expect(actual).toEqual(validResult)
  })

  it('fail with undefined value', () => {
    const actual = t.decimal.required.validate(undefined)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'required', actual: 'undefined' }]
    })
  })

  it('fail with null value', () => {
    const actual = t.decimal.required.validate(null)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'required', actual: 'null' }]
    })
  })
})
