import t from '@lib'

describe('type.number.gt', () => {
  it('pass if number is greater than specific value', () => {
    const actual = t.number.gt(-1).validate(1)
    expect(actual).toEqual({ valid: true })
  })

  it('fail if number is equal to specific value', () => {
    const actual = t.number.gt(-1).validate(-1)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'number.gt(-1)', actual: '-1' }]
    })
  })

  it('fail if number is less than specific value', () => {
    const actual = t.number.gt(-1).validate(-2)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'number.gt(-1)', actual: '-2' }]
    })
  })
})
