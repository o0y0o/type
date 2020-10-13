import t from '@lib'
import { validResult } from '../model'

describe('type.number.neq', () => {
  it("pass if number isn't equal to specific value", () => {
    const actual = t.number.neq(-1).validate(0)
    expect(actual).toEqual(validResult)
  })

  it('fail if number is equal to specific value', () => {
    const actual = t.number.neq(-1).validate(-1)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'number.neq(-1)', actual: '-1' }]
    })
  })
})
