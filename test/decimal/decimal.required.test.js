import t from '@lib'

describe('type.decimal.required', () => {
  it('pass with any decimal', () => {
    const actual = t.decimal.required.validate('1.98')
    expect(actual).toEqual({ valid: true })
  })

  it('fail with undefined value', () => {
    const actual = t.decimal.required.validate(undefined)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal.required', actual: 'undefined' }]
    })
  })

  it('fail with null value', () => {
    const actual = t.decimal.required.validate(null)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal.required', actual: 'null' }]
    })
  })
})
