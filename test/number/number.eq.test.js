import t from '@lib'
import { validResult } from '../helper'

describe('type.number.eq', () => {
  it('pass if number is equal to specific value', () => {
    const actual = t.number.eq(-1).validate(-1)
    expect(actual).toEqual(validResult)
  })

  it("fail if number isn't equal to specific value", () => {
    const actual = t.number.eq(-1).validate(-2)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'eq(-1)', actual: '-2' }]
    })
  })
})
