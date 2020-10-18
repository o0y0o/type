import t from '@lib'
import { validResult } from '../helper'

describe('type.eq', () => {
  it('pass with undefined value', () => {
    const actual = t.eq(1).validate(undefined)
    expect(actual).toEqual(validResult)
  })

  it('pass with null value', () => {
    const actual = t.eq(1).validate(null)
    expect(actual).toEqual(validResult)
  })

  it('pass if value is equal to specific value', () => {
    const actual = t.eq(1).validate(1)
    expect(actual).toEqual(validResult)
  })

  it("fail if value isn't equal to specific value", () => {
    const actual = t.eq(1).validate('1')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'eq(1)', actual: '"1"' }]
    })
  })

  it("fail if value's reference isn't equal to specific value", () => {
    const actual = t.eq({}).validate({})
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'eq({})', actual: '{}' }]
    })
  })
})
