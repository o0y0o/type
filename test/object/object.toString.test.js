import t from '@lib'

const expectedObj = {
  undefined: undefined,
  null: null,
  num: 1,
  str: '1',
  obj: { num: 1, str: '1' },
  arr: [{ num: 1, str: '1', obj: { num: 1, str: '1' } }]
}

const expectedObjJson = `{
  "undefined": undefined,
  "null": null,
  "num": 1,
  "str": "1",
  "obj": {
    "num": 1,
    "str": "1"
  },
  "arr": [
    {
      "num": 1,
      "str": "1",
      "obj": {
        "num": 1,
        "str": "1"
      }
    }
  ]
}`

const expectedType = {
  nil: t.nil,
  num: t.number.gt(0).required,
  str: t.string.match(/^\d+$/).required,
  obj: t.object.is({
    num: t.number.gt(0).required,
    str: t.string.match(/^\d+$/).required
  }).required,
  arr: t.array.of(
    t.object.is({
      num: t.number.gt(0).required,
      str: t.string.match(/^\d+$/).required,
      obj: t.object.is({
        num: t.number.gt(0).required,
        str: t.string.match(/^\d+$/).required,
        time: t.time.eq(new Date('2020-01-01T00:00:00.000Z')).required,
        obj: t.object.eq({ num: 1 }).required,
        eq: t.eq({ num: 1 }).required,
        oneOf: t.oneOf([1, 2]).required,
        valueOf: t.valueOf({ num1: 1, num2: 2 }).required
      }).required
    }).required
  ).required
}

const expectedTypeJson = `{
  "nil": nil,
  "num": number.gt(0).required,
  "str": string.match(/^\\d+$/).required,
  "obj": object.is({
    "num": number.gt(0).required,
    "str": string.match(/^\\d+$/).required
  }).required,
  "arr": array.of(object.is({
    "num": number.gt(0).required,
    "str": string.match(/^\\d+$/).required,
    "obj": object.is({
      "num": number.gt(0).required,
      "str": string.match(/^\\d+$/).required,
      "time": time.eq(2020-01-01T00:00:00.000Z).required,
      "obj": object.eq({
        "num": 1
      }).required,
      "eq": eq({
        "num": 1
      }).required,
      "oneOf": oneOf([1, 2]).required,
      "valueOf": valueOf({
        "num1": 1,
        "num2": 2
      }).required
    }).required
  }).required).required
}`

describe('type.object.toString', () => {
  it('support semantic display', () => {
    const actual1 = t.object.eq(expectedObj).required
    expect(`${actual1}`).toEqual(`object.eq(${expectedObjJson}).required`)

    const actual2 = t.object.match(expectedObj).required
    expect(`${actual2}`).toEqual(`object.match(${expectedObjJson}).required`)

    const actual3 = t.object.is(expectedType).required
    expect(`${actual3}`).toEqual(`object.is(${expectedTypeJson}).required`)

    const actual4 = t.object.like(expectedType).required
    expect(`${actual4}`).toEqual(`object.like(${expectedTypeJson}).required`)
  })
})
