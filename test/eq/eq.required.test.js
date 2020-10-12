import t from '@lib'

describe('type.eq.required', () => {
  it('pass with any equality', () => {
    const actual = t.eq(1).required.validate(1)
    expect(actual).toEqual({ valid: true })
  })

  it('fail with undefined value', () => {
    const actual = t.eq(1).required.validate(undefined)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'eq(1).required', actual: 'undefined' }]
    })
  })

  it('fail with null value', () => {
    const actual = t.eq(1).required.validate(null)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'eq(1).required', actual: 'null' }]
    })
  })
})
