import t from '@lib'

beforeAll(() => t.decimal.extendComparisonsWithDp(2))

describe('type.decimal.lte', () => {
  it('pass if decimal is less than specific value', () => {
    const actual = t.decimal.lte('-1.98').validate('-1.989')
    expect(actual).toEqual({ valid: true })
  })

  it('pass if decimal is equal to specific value', () => {
    const actual = t.decimal.lte('-1.989').validate('-1.989')
    expect(actual).toEqual({ valid: true })
  })

  it('fail if decimal is greater than specific value', () => {
    const actual = t.decimal.lte('-1.989').validate('-1.98')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal.lte(-1.989)', actual: '"-1.98"' }]
    })
  })
})

describe('type.decimal.lte2', () => {
  it('pass if decimal is less than specific value', () => {
    const actual = t.decimal.lte2('-1.989').validate('-1.999')
    expect(actual).toEqual({ valid: true })
  })

  it('pass if decimal is equal to specific value', () => {
    const actual = t.decimal.lte2('-1.989').validate('-1.981')
    expect(actual).toEqual({ valid: true })
  })

  it('fail if decimal is greater than specific value', () => {
    const actual = t.decimal.lte2('-1.989').validate('-1.979')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal.lte2(-1.989)', actual: '"-1.979"' }]
    })
  })
})
