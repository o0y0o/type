import t from '@lib'

describe('type.string', () => {
  it('pass with undefined value', () => {
    const actual = t.string.validate(void 0)
    expect(actual).toEqual({ valid: true })
  })

  it('pass with null value', () => {
    const actual = t.string.validate(null)
    expect(actual).toEqual({ valid: true })
  })

  it('pass with empty string', () => {
    const actual = t.string.validate('')
    expect(actual).toEqual({ valid: true })
  })

  it('pass with non-empty string', () => {
    const actual = t.string.validate('foo')
    expect(actual).toEqual({ valid: true })
  })

  it('fail with non-string value', () => {
    const actual = t.string.validate({})
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'string', actual: '{}' }]
    })
  })

  it('support extensions', () => {
    const actual = t.string
      .lenEq(3)
      .match(/^\w{3}$/)
      .required.validate('foo')
    expect(actual).toEqual({ valid: true })
  })
})
