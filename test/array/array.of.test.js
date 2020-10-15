import t from '@lib'
import { validResult } from '../model'

const expected = t.object.match({ num: 1, str: '1' }).required

const expected1String = `object.match({
  "num": 1,
  "str": "1"
})`

const expected2String = `${expected1String}.required`

const actualGood = [
  { num: 1, str: '1', bool: true },
  { num: 1, str: '1', bool: true }
]

const actualBad1 = { num: 1, str: 1 }

const actualBadString1 = `{
  "num": 1,
  "str": 1
}`

describe('type.array.of', () => {
  it("pass if array's item fulfills specific constraint", () => {
    const actual = t.array.of(expected).validate(actualGood)
    expect(actual).toEqual(validResult)
  })

  it("fail if array's item doesn't fulfill specific constraint", () => {
    const actual = t.array.of(expected).validate([actualBad1, null])
    expect(actual).toEqual({
      valid: false,
      errors: [
        { name: '[0]', expected: expected1String, actual: actualBadString1 },
        { name: '[1]', expected: expected2String, actual: 'null' }
      ]
    })
  })
})
