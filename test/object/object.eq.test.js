import t from '@lib'

const expected = {
  number: 1,
  string: '1',
  object: { number: 1 },
  array: [{ object: { number: 1 } }]
}

const expectedString = `{
  "number": 1,
  "string": "1",
  "object": {
    "number": 1
  },
  "array": [
    {
      "object": {
        "number": 1
      }
    }
  ]
}`

const actualGood = {
  number: 1,
  string: '1',
  object: { number: 1 },
  array: [{ object: { number: 1 } }]
}

const actualBad = {
  number: 1,
  string: '1',
  object: { number: 1 },
  array: [{ object: { number: 2 } }]
}

const actualBadString = `{
  "number": 1,
  "string": "1",
  "object": {
    "number": 1
  },
  "array": [
    {
      "object": {
        "number": 2
      }
    }
  ]
}`

describe('type.object.eq', () => {
  it('pass if object is deeply equal to specific object', () => {
    const actual = t.object.eq(expected).validate(actualGood)
    expect(actual).toEqual({ valid: true })
  })

  it("pass if object isn't deeply equal to specific object", () => {
    const actual = t.object.eq(expected).validate(actualBad)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: `object.eq(${expectedString})`, actual: actualBadString }]
    })
  })
})
