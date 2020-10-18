import t from '@lib'
import { validResult } from '../helper'

describe('type.bool', () => {
  it('pass with undefined value', () => {
    const actual = t.bool.validate(undefined)
    expect(actual).toEqual(validResult)
  })

  it('pass with null value', () => {
    const actual = t.bool.validate(null)
    expect(actual).toEqual(validResult)
  })

  it('pass with true', () => {
    const actual = t.bool.validate(true)
    expect(actual).toEqual(validResult)
  })

  it('pass with false', () => {
    const actual = t.bool.validate(false)
    expect(actual).toEqual(validResult)
  })

  it('fail with non-bool value', () => {
    const actual = t.bool.validate(1)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'bool', actual: '1' }]
    })
  })

  it('support extensions', () => {
    const actual = t.bool.required.validate(true)
    expect(actual).toEqual(validResult)
  })
})
