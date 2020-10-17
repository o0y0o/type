import t from '@lib'
import { validResult } from '../model'

const expected = [
  t.object.match({ num: 1, str: '1' }).required,
  t.object.match({ num: 2, str: '2' }).required
]

const expected1Msg = `match({
  "num": 1,
  "str": "1"
})`

const actualGood1 = { num: 1, str: '1', bool: true }

const actualGood2 = { num: 2, str: '2', bool: true }

const actualBad1 = { num: 1, str: 1 }

const actualBad1Msg = `{
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
        { name: '[0]', expected: expected1Msg, actual: actualBad1Msg },
        { name: '[1]', expected: 'required', actual: 'null' }
      ]
    })
  })

  it("fail if array's items are less than specific constraints", () => {
    const actual = t.array.is(expected).validate([actualBad1])
    expect(actual).toEqual({
      valid: false,
      errors: [
        { name: '[0]', expected: expected1Msg, actual: actualBad1Msg },
        { name: '[1]', expected: 'required', actual: 'undefined' }
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
        { name: '[0]', expected: expected1Msg, actual: actualBad1Msg },
        { name: '[2]', expected: 'undeclared', actual: actualBad1Msg }
      ]
    })
  })
})
