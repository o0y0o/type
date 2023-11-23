import t from '@lib'
import { validResult } from '../helper'

const expected = {
  num: t.number.gt(0).required,
  str: t.string.match(/^\d$/).required,
  obj: t.object.like({
    num: t.number.gt(0).required,
    str: t.string.match(/^\d$/).required
  }).required,
  arr: t.array.of(
    t.object.like({
      num: t.number.gt(0).required,
      str: t.string.match(/^\d$/).required,
      obj: t.object.like({
        num: t.number.gt(0).required,
        str: t.string.match(/^\d$/).required
      }).required
    }).required
  ).required
}

const actualGood = {
  num: 1,
  str: '1',
  obj: { num: 1, str: '1', extra: '' },
  arr: [
    { num: 1, str: '1', obj: { num: 1, str: '1', extra: '' }, extra: '' },
    { num: 2, str: '2', obj: { num: 2, str: '2', extra: '' }, extra: '' }
  ],
  extra: ''
}

const actualBad = {
  num: 0,
  str: 'a',
  obj: { num: 0, extra: '' },
  arr: [
    { num: 0, str: 'a', extra: '' },
    { num: 1, str: '1', obj: { num: 0, extra: '' }, extra: '' }
  ],
  extra: ''
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

describe('type.object.like', () => {
  it('pass if object fulfills specific constraint', () => {
    const actual = t.object.like(expected).validate(actualGood)
    expect(actual).toEqual(validResult)
  })

  it("fail if object doesn't fulfill specific constraint", () => {
    const actual = t.object.like(expected).validate(actualBad)
    expect(actual).toEqual({ valid: false, errors: actualBadErrors })
  })
})
