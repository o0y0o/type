import t from '@lib'
import { validResult } from '../model'

const expected = {
  num: 1,
  str: '1',
  obj: { num: 1 },
  arr: [{ obj: { num: 1 } }]
}

const expectedString = `object.match({
  "num": 1,
  "str": "1",
  "obj": {
    "num": 1
  },
  "arr": [
    {
      "obj": {
        "num": 1
      }
    }
  ]
})`

const actualGood = {
  num: 1,
  str: '1',
  obj: { num: 1, extra: 1 },
  arr: [{ obj: { num: 1, extra: 1 }, extra: 1 }, { extra: 1 }],
  extra: 1
}

const actualBad = {
  str: '1',
  obj: { num: 1 },
  arr: [{ obj: { num: 1 } }]
}

const actualBadString = `{
  "str": "1",
  "obj": {
    "num": 1
  },
  "arr": [
    {
      "obj": {
        "num": 1
      }
    }
  ]
}`

describe('type.object.match', () => {
  it('pass if object matches specific object', () => {
    const actual = t.object.match(expected).validate(actualGood)
    expect(actual).toEqual(validResult)
  })

  it("pass if object doesn't match specific object", () => {
    const actual = t.object.match(expected).validate(actualBad)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: expectedString, actual: actualBadString }]
    })
  })
})
