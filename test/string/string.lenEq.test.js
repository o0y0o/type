import t from '@lib'

describe('type.string.lenEq', () => {
  it('pass if string has specific length', () => {
    const actual = t.string.lenEq(3).validate('foo')
    expect(actual).toEqual({ valid: true })
  })

  it("fail if string doesn't have specific length", () => {
    const actual = t.string.lenEq(2).validate('foo')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'string.lenEq(2)', actual: '"foo"' }]
    })
  })
})
