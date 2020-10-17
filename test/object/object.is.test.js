import t from '@lib'
import { validResult } from '../model'

const expected = {
  num: t.number.gt(0).required,
  str: t.string.match(/^\d$/).required,
  obj: t.object.is({
    num: t.number.gt(0).required,
    str: t.string.match(/^\d$/).required
  }).required,
  arr: t.array.of(
    t.object.is({
      num: t.number.gt(0).required,
      str: t.string.match(/^\d$/).required,
      obj: t.object.is({
        num: t.number.gt(0).required,
        str: t.string.match(/^\d$/).required
      }).required
    }).required
  ).required
}

const actualGood = {
  num: 1,
  str: '1',
  obj: { num: 1, str: '1' },
  arr: [
    { num: 1, str: '1', obj: { num: 1, str: '1' } },
    { num: 2, str: '2', obj: { num: 2, str: '2' } }
  ]
}

const actualBad = {
  num: 0,
  str: 'a',
  obj: { num: 0 },
  arr: [
    { num: 0, str: 'a' },
    { num: 1, str: '1', obj: { num: 0 } }
  ]
}

const actualBadErrors = [
  { name: 'num', expected: 'gt(0)', actual: '0' },
  { name: 'str', expected: 'match(/^\\d$/)', actual: '"a"' },
  { name: 'obj.num', expected: 'gt(0)', actual: '0' },
  { name: 'obj.str', expected: 'required', actual: 'undefined' },
  { name: 'arr[0].num', expected: 'gt(0)', actual: '0' },
  { name: 'arr[0].str', expected: 'match(/^\\d$/)', actual: '"a"' },
  { name: 'arr[0].obj', expected: 'required', actual: 'undefined' },
  { name: 'arr[1].obj.num', expected: 'gt(0)', actual: '0' },
  { name: 'arr[1].obj.str', expected: 'required', actual: 'undefined' }
]

describe('type.object.is', () => {
  it('pass if object fulfills specific constraint', () => {
    const actual = t.object.is(expected).validate(actualGood)
    expect(actual).toEqual(validResult)
  })

  it("pass if object doesn't fulfills specific constraint", () => {
    const actual = t.object.is(expected).validate(actualBad)
    expect(actual).toEqual({ valid: false, errors: actualBadErrors })
  })
})
