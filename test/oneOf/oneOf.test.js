import t from '@lib'

describe('type.oneOf', () => {
  it('pass with undefined value', () => {
    const actual = t.oneOf([1, 2]).validate(undefined)
    expect(actual).toEqual({ valid: true })
  })

  it('pass with null value', () => {
    const actual = t.oneOf([1, 2]).validate(null)
    expect(actual).toEqual({ valid: true })
  })

  it('pass if value is one of specific values', () => {
    const actual = t.oneOf([1, 2]).validate(1)
    expect(actual).toEqual({ valid: true })
  })

  it("fail if value isn't one of specific values", () => {
    const actual = t.oneOf([1, 2]).validate('1')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'oneOf([1, 2])', actual: '"1"' }]
    })
  })

  it("fail if value's reference isn't one of specific values", () => {
    const actual = t.oneOf([{}]).validate({})
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'oneOf([{}])', actual: '{}' }]
    })
  })
})
