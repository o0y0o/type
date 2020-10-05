import t from '@lib'

describe('type.string.required', () => {
  it('pass with any string', () => {
    const actual = t.string.required.validate('foo')
    expect(actual).toEqual({ valid: true })
  })

  it('fail with undefined value', () => {
    const actual = t.string.required.validate(void 0)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'string.required', actual: 'undefined' }]
    })
  })

  it('fail with null value', () => {
    const actual = t.string.required.validate(null)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'string.required', actual: 'null' }]
    })
  })
})
