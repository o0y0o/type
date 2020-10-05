import t from '@lib'

describe('type.number.lte', () => {
  it('pass if number is less than specific value', () => {
    const actual = t.number.lte(-1).validate(-2)
    expect(actual).toEqual({ valid: true })
  })

  it('pass if number is equal to specific value', () => {
    const actual = t.number.lte(-1).validate(-1)
    expect(actual).toEqual({ valid: true })
  })

  it('fail if number is greater than specific value', () => {
    const actual = t.number.lte(-1).validate(0)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'number.lte(-1)', actual: '0' }]
    })
  })
})
