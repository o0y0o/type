import t from '@lib'

beforeAll(() => t.decimal.extendComparisonsWithDp(2))

describe('type.decimal.neq', () => {
  it("pass if decimal isn't equal to specific value", () => {
    const actual = t.decimal.neq('-1.989').validate('-1.981')
    expect(actual).toEqual({ valid: true })
  })

  it('fail if decimal is equal to specific value', () => {
    const actual = t.decimal.neq('-1.989').validate('-1.989')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal.neq(-1.989)', actual: '"-1.989"' }]
    })
  })
})

describe('type.decimal.neq2', () => {
  it("pass if decimal isn't equal to specific value", () => {
    const actual = t.decimal.neq2('-1.989').validate('-1.999')
    expect(actual).toEqual({ valid: true })
  })

  it('fail if decimal is equal to specific value', () => {
    const actual = t.decimal.neq2('-1.989').validate('-1.981')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal.neq2(-1.989)', actual: '"-1.981"' }]
    })
  })
})
