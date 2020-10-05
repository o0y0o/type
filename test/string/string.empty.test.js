import t from '@lib'

describe('type.string.empty', () => {
  it('pass with empty string', () => {
    const actual = t.string.empty.validate('')
    expect(actual).toEqual({ valid: true })
  })

  it('fail with non-empty string', () => {
    const actual = t.string.empty.validate('foo')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'string.empty', actual: '"foo"' }]
    })
  })
})
