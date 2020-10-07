import t from '@lib'

describe('type.decimal', () => {
  it('pass with undefined value', () => {
    const actual = t.decimal.validate(undefined)
    expect(actual).toEqual({ valid: true })
  })

  it('pass with null value', () => {
    const actual = t.decimal.validate(null)
    expect(actual).toEqual({ valid: true })
  })

  it('pass with decimal string', () => {
    const actual = t.decimal.validate('-0.1234')
    expect(actual).toEqual({ valid: true })
  })

  it('fail with non-decimal string', () => {
    const actual = t.decimal.validate('a')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal', actual: '"a"' }]
    })
  })

  it('fail with non-string value', () => {
    const actual = t.decimal.validate(1.234)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal', actual: '1.234' }]
    })
  })

  it('support extensions', () => {
    const actual = t.decimal.gte('1.01234', 4).required.validate('1.01235')
    expect(actual).toEqual({ valid: true })
  })
})
