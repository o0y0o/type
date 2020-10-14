import t from '@lib'
import { validResult } from '../model'

const expected = t.object.match({ a: 1, b: '1' }).required

const expected1String = `object.match({
  "a": 1,
  "b": "1"
})`

const expected2String = `${expected1String}.required`

const actualGood = [
  { a: 1, b: '1', c: true },
  { a: 1, b: '1', d: true }
]

const actualBad1 = { a: 1, b: 1 }

const actualBadString1 = `{
  "a": 1,
  "b": 1
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
