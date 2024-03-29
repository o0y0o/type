import t from '@lib'
import { validResult } from '../helper'

const expected = {
  num: 1,
  str: '1',
  obj: { num: 1 },
  arr: [{ obj: { num: 1 } }]
}

const expectedMsg = `eq({
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
  obj: { num: 1 },
  arr: [{ obj: { num: 1 } }]
}

const actualBad = {
  num: 1,
  str: '1',
  obj: { num: 1 },
  arr: [{ obj: { num: 2 } }]
}

const actualBadMsg = `{
  "num": 1,
  "str": "1",
  "obj": {
    "num": 1
  },
  "arr": [
    {
      "obj": {
        "num": 2
      }
    }
  ]
}`

describe('type.object.eq', () => {
  it('pass if object is deeply equal to specific object', () => {
    const actual = t.object.eq(expected).validate(actualGood)
    expect(actual).toEqual(validResult)
  })

  it("pass if object isn't deeply equal to specific object", () => {
    const actual = t.object.eq(expected).validate(actualBad)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: expectedMsg, actual: actualBadMsg }]
    })
  })
})
