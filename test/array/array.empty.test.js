import t from '@lib'

describe('type.array.empty', () => {
  it('pass with empty array', () => {
    const actual = t.array.empty.validate([])
    expect(actual).toEqual({ valid: true })
  })

  it('fail with non-empty array', () => {
    const actual = t.array.empty.validate([1])
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'array.empty', actual: '[1]' }]
    })
  })
})
