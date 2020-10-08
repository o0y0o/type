import t from '@lib'

describe('type.object', () => {
  it('pass with undefined value', () => {
    const actual = t.object.validate(undefined)
    expect(actual).toEqual({ valid: true })
  })

  it('pass with null value', () => {
    const actual = t.object.validate(null)
    expect(actual).toEqual({ valid: true })
  })

  it('pass with any object', () => {
    const actual = t.object.validate({})
    expect(actual).toEqual({ valid: true })
  })

  it('fail with array', () => {
    const actual = t.object.validate([1, 2, 3])
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'object', actual: '[1, 2, 3]' }]
    })
  })

  it('fail with non-object value', () => {
    const actual = t.object.validate(1)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'object', actual: '1' }]
    })
  })

  it('support extensions', () => {
    const actual = t.object.eq({ a: 1 }).required.validate({ a: 1 })
    expect(actual).toEqual({ valid: true })
  })
})
