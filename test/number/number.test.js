import t from '@lib'

describe('type.number', () => {
  it('pass with undefined value', () => {
    const actual = t.number.validate(undefined)
    expect(actual).toEqual({ valid: true })
  })

  it('pass with null value', () => {
    const actual = t.number.validate(null)
    expect(actual).toEqual({ valid: true })
  })

  it('pass with zero number', () => {
    const actual = t.number.validate(0)
    expect(actual).toEqual({ valid: true })
  })

  it('pass with non-zero number', () => {
    const actual = t.number.validate(-1)
    expect(actual).toEqual({ valid: true })
  })

  it('fail with non-number value', () => {
    const actual = t.number.validate('1')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'number', actual: '"1"' }]
    })
  })

  it('support extensions', () => {
    const actual = t.number.gte(3).required.validate(4)
    expect(actual).toEqual({ valid: true })
  })
})
