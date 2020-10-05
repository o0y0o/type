import t from '@lib'

describe('type.string.notEmpty', () => {
  it('pass with non-empty string', () => {
    const actual = t.string.notEmpty.validate('foo')
    expect(actual).toEqual({ valid: true })
  })

  it('fail with empty string', () => {
    const actual = t.string.notEmpty.validate('')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'string.notEmpty', actual: '""' }]
    })
  })
})
