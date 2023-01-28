import t from '@lib'

const expectedObj = {
  undefined,
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

describe('type.neq.toString', () => {
  it('support semantic display', () => {
    const actual1 = t.neq(expectedObj).required
    expect(`${actual1}`).toEqual(`neq(${expectedObjJson}).required`)

    const actual2 = t.neq(expectedArray).required
    expect(`${actual2}`).toEqual(`neq(${expectedArrayJson}).required`)

    const actual3 = t.neq(1).required
    expect(`${actual3}`).toEqual('neq(1).required')

    const actual4 = t.neq([1, 2]).required
    expect(`${actual4}`).toEqual('neq([1, 2]).required')
  })
})
