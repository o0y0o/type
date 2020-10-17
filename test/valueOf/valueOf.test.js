import t from '@lib'
import { validResult } from '../model'

const expected = { a: 1, b: 2 }

const expectedMsg = `valueOf({
  "a": 1,
  "b": 2
})`

describe('type.valueOf', () => {
  it('pass with undefined value', () => {
    const actual = t.valueOf(expected).validate(undefined)
    expect(actual).toEqual(validResult)
  })

  it('pass with null value', () => {
    const actual = t.valueOf(expected).validate(null)
    expect(actual).toEqual(validResult)
  })

  it('pass if value is value of specific object', () => {
    const actual = t.valueOf(expected).validate(1)
    expect(actual).toEqual(validResult)
  })

  it("fail if value isn't value of specific object", () => {
    const actual = t.valueOf(expected).validate('1')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: expectedMsg, actual: '"1"' }]
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
