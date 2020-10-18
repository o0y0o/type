import t from '@lib'
import { validResult } from '../helper'

describe('type.string.lenEq', () => {
  it('pass if string has specific length', () => {
    const actual = t.string.lenEq(3).validate('foo')
    expect(actual).toEqual(validResult)
  })

  it("fail if string doesn't have specific length", () => {
    const actual = t.string.lenEq(2).validate('foo')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'lenEq(2)', actual: '"foo"' }]
    })
  })
})
