import t from '@lib'
import { validResult } from '../model'

describe('type.string', () => {
  it('pass with undefined value', () => {
    const actual = t.string.validate(undefined)
    expect(actual).toEqual(validResult)
  })

  it('pass with null value', () => {
    const actual = t.string.validate(null)
    expect(actual).toEqual(validResult)
  })

  it('pass with empty string', () => {
    const actual = t.string.validate('')
    expect(actual).toEqual(validResult)
  })

  it('pass with non-empty string', () => {
    const actual = t.string.validate('foo')
    expect(actual).toEqual(validResult)
  })

  it('fail with non-string value', () => {
    const actual = t.string.validate({})
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'string', actual: '{}' }]
    })
  })

  it('support extensions', () => {
    const actual = t.string
      .lenEq(3)
      .match(/^\w{3}$/)
      .required.validate('foo')
    expect(actual).toEqual(validResult)
  })
})
