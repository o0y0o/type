import t from '@lib'

describe('type.array.notEmpty', () => {
  it('pass with non-empty array', () => {
    const actual = t.array.notEmpty.validate([1])
    expect(actual).toEqual({ valid: true })
  })

  it('fail with empty array', () => {
    const actual = t.array.notEmpty.validate([])
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'array.notEmpty', actual: '[]' }]
    })
  })
})
