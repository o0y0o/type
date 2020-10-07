import t from '@lib'

describe('type.bool.required', () => {
  it('pass with any bool', () => {
    const actual = t.bool.required.validate(true)
    expect(actual).toEqual({ valid: true })
  })

  it('fail with undefined value', () => {
    const actual = t.bool.required.validate(undefined)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'bool.required', actual: 'undefined' }]
    })
  })

  it('fail with null value', () => {
    const actual = t.bool.required.validate(null)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'bool.required', actual: 'null' }]
    })
  })
})
