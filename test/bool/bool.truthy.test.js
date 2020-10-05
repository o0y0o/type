import t from '@lib'

describe('type.bool.truthy', () => {
  it('pass if bool is truthy', () => {
    const actual = t.bool.truthy.validate(true)
    expect(actual).toEqual({ valid: true })
  })

  it("fail if bool isn't truthy", () => {
    const actual = t.bool.truthy.validate(false)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'bool.truthy', actual: 'false' }]
    })
  })
})
