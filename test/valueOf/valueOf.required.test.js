import t from '@lib'

const expectedString = `valueOf({
  "a": 1,
  "b": 2
}).required`

describe('type.valueOf.required', () => {
  it('pass with any contained value', () => {
    const actual = t.valueOf({ a: 1, b: 2 }).required.validate(1)
    expect(actual).toEqual({ valid: true })
  })

  it('fail with undefined value', () => {
    const actual = t.valueOf({ a: 1, b: 2 }).required.validate(undefined)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: expectedString, actual: 'undefined' }]
    })
  })

  it('fail with null value', () => {
    const actual = t.valueOf({ a: 1, b: 2 }).required.validate(null)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: expectedString, actual: 'null' }]
    })
  })
})
