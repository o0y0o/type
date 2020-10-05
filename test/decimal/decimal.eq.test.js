import t from '@lib'

describe('type.decimal.eq', () => {
  it('pass if decimal is equal to specific value', () => {
    const actual = t.decimal.eq('-1.989').validate('-1.981')
    expect(actual).toEqual({ valid: true })
  })

  it("fail if decimal isn't equal to specific value", () => {
    const actual = t.decimal.eq('-1.989').validate('-1.999')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal.eq2(-1.989)', actual: '"-1.999"' }]
    })
  })
})
