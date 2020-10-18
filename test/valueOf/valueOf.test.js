import t from '@lib'
import { validResult } from '../helper'

const expectedMsg = `valueOf({
  "a": 1,
  "b": 2
})`

describe('type.valueOf', () => {
  it('pass with undefined value', () => {
    const actual = t.valueOf({ a: 1, b: 2 }).validate(undefined)
    expect(actual).toEqual(validResult)
  })

  it('pass with null value', () => {
    const actual = t.valueOf({ a: 1, b: 2 }).validate(null)
    expect(actual).toEqual(validResult)
  })

  it('pass if value is value of specific object', () => {
    const actual = t.valueOf({ a: 1, b: 2 }).validate(1)
    expect(actual).toEqual(validResult)
  })

  it("fail if value isn't value of specific object", () => {
    const actual = t.valueOf({ a: 1, b: 2 }).validate('1')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: expectedMsg, actual: '"1"' }]
    })
  })
})
