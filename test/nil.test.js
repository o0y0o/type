import t from '@lib'

describe('type.nil', () => {
  it('pass with undefined value', () => {
    const actual = t.nil.validate(undefined)
    expect(actual).toEqual({ valid: true })
  })

  it('pass with null value', () => {
    const actual = t.nil.validate(null)
    expect(actual).toEqual({ valid: true })
  })

  it('fail with non-nil value', () => {
    const actual = t.nil.validate({})
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'nil', actual: '{}' }]
    })
  })
})
