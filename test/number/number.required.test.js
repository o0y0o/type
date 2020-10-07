import t from '@lib'

describe('type.number.required', () => {
  it('pass with any number', () => {
    const actual = t.number.required.validate(1)
    expect(actual).toEqual({ valid: true })
  })

  it('fail with undefined value', () => {
    const actual = t.number.required.validate(undefined)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'number.required', actual: 'undefined' }]
    })
  })

  it('fail with null value', () => {
    const actual = t.number.required.validate(null)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'number.required', actual: 'null' }]
    })
  })
})
