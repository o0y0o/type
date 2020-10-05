import t from '@lib'

describe('type.decimal.lt', () => {
  it('pass if decimal is less than specific value', () => {
    const actual = t.decimal.lt('-1.989').validate('-1.999')
    expect(actual).toEqual({ valid: true })
  })

  it('fail if decimal is equal to specific value', () => {
    const actual = t.decimal.lt('-1.989').validate('-1.981')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal.lt2(-1.989)', actual: '"-1.981"' }]
    })
  })

  it('fail if decimal is greater than specific value', () => {
    const actual = t.decimal.lt('-1.989').validate('-1.979')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal.lt2(-1.989)', actual: '"-1.979"' }]
    })
  })
})
