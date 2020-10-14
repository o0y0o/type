import t from '@lib'
import { validResult } from '../model'

const expected = [
  t.object.match({ a: 1, b: '1' }).required,
  t.object.match({ a: 2, b: '2' }).required
]

const expected1String = `object.match({
  "a": 1,
  "b": "1"
})`

const expected2String = `object.match({
  "a": 2,
  "b": "2"
}).required`

const actualGood1 = { a: 1, b: '1', c: true }

const actualGood2 = { a: 2, b: '2', d: true }

const actualBad1 = { a: 1, b: 1 }

const actualBadString1 = `{
  "a": 1,
  "b": 1
}`

describe('type.array.is', () => {
  it("pass if array's items fulfill specific constraints", () => {
    const actual = t.array.is(expected).validate([actualGood1, actualGood2])
    expect(actual).toEqual(validResult)
  })

  it("fail if array's items don't fulfill specific constraints", () => {
    const actual = t.array.is(expected).validate([actualBad1, null])
    expect(actual).toEqual({
      valid: false,
      errors: [
        { name: '[0]', expected: expected1String, actual: actualBadString1 },
        { name: '[1]', expected: expected2String, actual: 'null' }
      ]
    })
  })

  it("fail if array's items are less than specific constraints", () => {
    const actual = t.array.is(expected).validate([actualBad1])
    expect(actual).toEqual({
      valid: false,
      errors: [
        { name: '[0]', expected: expected1String, actual: actualBadString1 },
        { name: '[1]', expected: expected2String, actual: 'undefined' }
      ]
    })
  })

  it("fail if array's items are more than specific constraints", () => {
    const actual = t.array
      .is(expected)
      .validate([actualBad1, actualGood2, actualBad1])
    expect(actual).toEqual({
      valid: false,
      errors: [
        { name: '[0]', expected: expected1String, actual: actualBadString1 },
        { name: '[2]', expected: 'undeclared', actual: actualBadString1 }
      ]
    })
  })
})
