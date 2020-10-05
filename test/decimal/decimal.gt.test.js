import t from '@lib'

describe('type.decimal.gt', () => {
  it('pass if decimal is greater than specific value', () => {
    const actual = t.decimal.gt('-1.989').validate('-1.979')
    expect(actual).toEqual({ valid: true })
  })

  it('fail if decimal is equal to specific value', () => {
    const actual = t.decimal.gt('-1.989').validate('-1.98')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal.gt2(-1.989)', actual: '"-1.98"' }]
    })
  })

  it('fail if decimal is less than specific value', () => {
    const actual = t.decimal.gt('-1.989').validate('-1.999')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal.gt2(-1.989)', actual: '"-1.999"' }]
    })
  })
})
