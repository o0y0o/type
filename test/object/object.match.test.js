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
  object: { number: 1, extra: 1 },
  array: [{ object: { number: 1, extra: 1 }, extra: 1 }, { extra: 1 }],
  extra: 1
}

const actualBad = {
  string: '1',
  object: { number: 1 },
  array: [{ object: { number: 1 } }]
}

const actualBadString = `{
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

describe('type.object.match', () => {
  it('pass if object matches specific object', () => {
    const actual = t.object.match(expected).validate(actualGood)
    expect(actual).toEqual({ valid: true })
  })

  it("pass if object doesn't match specific object", () => {
    const actual = t.object.match(expected).validate(actualBad)
    expect(actual).toEqual({
      valid: false,
      errors: [
        { expected: `object.match(${expectedString})`, actual: actualBadString }
      ]
    })
  })
})
