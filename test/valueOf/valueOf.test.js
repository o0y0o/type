import t from '@lib'

const expectedString = `valueOf({
  "a": 1,
  "b": 2
})`

describe('type.valueOf', () => {
  it('pass with undefined value', () => {
    const actual = t.valueOf({ a: 1, b: 2 }).validate(undefined)
    expect(actual).toEqual({ valid: true })
  })

  it('pass with null value', () => {
    const actual = t.valueOf({ a: 1, b: 2 }).validate(null)
    expect(actual).toEqual({ valid: true })
  })

  it('pass if value is value of specific object', () => {
    const actual = t.valueOf({ a: 1, b: 2 }).validate(1)
    expect(actual).toEqual({ valid: true })
  })

  it("fail if value isn't value of specific object", () => {
    const actual = t.valueOf({ a: 1, b: 2 }).validate('1')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: expectedString, actual: '"1"' }]
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
