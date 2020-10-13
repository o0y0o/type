import t from '@lib'
import { validResult } from '../model'

describe('type.oneOf', () => {
  it('pass with undefined value', () => {
    const actual = t.oneOf([1, 2]).validate(undefined)
    expect(actual).toEqual(validResult)
  })

  it('pass with null value', () => {
    const actual = t.oneOf([1, 2]).validate(null)
    expect(actual).toEqual(validResult)
  })

  it('pass if value is one of specific values', () => {
    const actual = t.oneOf([1, 2]).validate(1)
    expect(actual).toEqual(validResult)
  })

  it("fail if value isn't one of specific values", () => {
    const actual = t.oneOf([1, 2]).validate('1')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'oneOf([1, 2])', actual: '"1"' }]
    })
  })

  it("fail if value's reference isn't one of specific values", () => {
    const actual = t.oneOf([{}]).validate({})
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'oneOf([{}])', actual: '{}' }]
    })
  })
})
