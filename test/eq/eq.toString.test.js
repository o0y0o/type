import t from '@lib'

const expectedObj = {
  undefined: undefined,
  null: null,
  num: 1,
  str: '1',
  obj: { num: 1, str: '1' },
  arr: [{ num: 1, str: '1' }]
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
      "str": "1"
    }
  ]
}`

const expectedArray = [expectedObj]

const expectedArrayJson = `[
  {
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
        "str": "1"
      }
    ]
  }
]`

describe('type.eq.toString', () => {
  it('support semantic display', () => {
    const actual1 = t.eq(expectedObj).required
    expect(`${actual1}`).toEqual(`eq(${expectedObjJson}).required`)

    const actual2 = t.eq(expectedArray).required
    expect(`${actual2}`).toEqual(`eq(${expectedArrayJson}).required`)

    const actual3 = t.eq(1).required
    expect(`${actual3}`).toEqual('eq(1).required')

    const actual4 = t.eq([1, 2]).required
    expect(`${actual4}`).toEqual('eq([1, 2]).required')
  })
})
