import t from '@lib'
import { validResult } from './model'

describe('type.nil', () => {
  it('pass with undefined value', () => {
    const actual = t.nil.validate(undefined)
    expect(actual).toEqual(validResult)
  })

  it('pass with null value', () => {
    const actual = t.nil.validate(null)
    expect(actual).toEqual(validResult)
  })

  it('fail with non-nil value', () => {
    const actual = t.nil.validate({})
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'nil', actual: '{}' }]
    })
  })
})
