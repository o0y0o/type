import t from '@lib'
import { validResult } from '../model'

const expected = [
  t.object.match({ num: 1, str: '1' }).required,
  t.object.match({ num: 2, str: '2' }).required
]

const expected1String = `object.match({
  "num": 1,
  "str": "1"
})`

const expected2String = `object.match({
  "num": 2,
  "str": "2"
}).required`

const actualGood1 = { num: 1, str: '1', bool: true }

const actualGood2 = { num: 2, str: '2', bool: true }

const actualBad1 = { num: 1, str: 1 }

const actualBadString1 = `{
  "num": 1,
  "str": 1
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
