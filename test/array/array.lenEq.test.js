import t from '@lib'
import { validResult } from '../model'

describe('type.array.lenEq', () => {
  it('pass if array has specific length', () => {
    const actual = t.array.lenEq(3).validate([1, 2, 3])
    expect(actual).toEqual(validResult)
  })

  it("fail if array doesn't have specific length", () => {
    const actual = t.array.lenEq(2).validate([1, 2, 3])
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'array.lenEq(2)', actual: '[1, 2, 3]' }]
    })
  })
})
