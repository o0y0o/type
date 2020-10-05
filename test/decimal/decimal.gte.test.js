import t from '@lib'

describe('type.decimal.gte', () => {
  it('pass if decimal is greater than specific value', () => {
    const actual = t.decimal.gte('-1.989').validate('-1.981')
    expect(actual).toEqual({ valid: true })
  })

  it('pass if decimal is equal to specific value', () => {
    const actual = t.decimal.gte('-1.989').validate('-1.98')
    expect(actual).toEqual({ valid: true })
  })

  it('fail if decimal is less than specific value', () => {
    const actual = t.decimal.gte('-1.989').validate('-1.999')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal.gte2(-1.989)', actual: '"-1.999"' }]
    })
  })
})
