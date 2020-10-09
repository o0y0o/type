import t from '@lib'

describe('type.array', () => {
  it('pass with undefined value', () => {
    const actual = t.array.validate(undefined)
    expect(actual).toEqual({ valid: true })
  })

  it('pass with null value', () => {
    const actual = t.array.validate(null)
    expect(actual).toEqual({ valid: true })
  })

  it('pass with any array', () => {
    const actual = t.array.validate([1, 2])
    expect(actual).toEqual({ valid: true })
  })

  it('fail with non-array value', () => {
    const actual = t.array.validate({})
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'array', actual: '{}' }]
    })
  })

  it('support extensions', () => {
    const actual = t.array.empty.required.validate([])
    expect(actual).toEqual({ valid: true })
  })
})
