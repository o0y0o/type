import t from '@lib'
import { indent } from '../helper'

const expectedType = t.object.is({
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
      str: t.string.match(/^\d+$/).required
    }).required
  ).required
}).required

const expectedTypeJson = `object.is({
  "nil": nil,
  "num": number.gt(0).required,
  "str": string.match(/^\\d+$/).required,
  "obj": object.is({
    "num": number.gt(0).required,
    "str": string.match(/^\\d+$/).required
  }).required,
  "arr": array.of(object.is({
    "num": number.gt(0).required,
    "str": string.match(/^\\d+$/).required
  }).required).required
}).required`

const expectedTypes = [expectedType]

const expectedTypesJson = `[
${indent(expectedTypeJson)}
]`

describe('type.array.toString', () => {
  it('support semantic display', () => {
    const actual1 = t.array.notEmpty.lenEq(3).required
    expect(`${actual1}`).toEqual('array.notEmpty.lenEq(3).required')

    const actual2 = t.array.lenEq(0).empty.required
    expect(`${actual2}`).toEqual('array.lenEq(0).empty.required')

    const actual3 = t.array.of(expectedType).required
    expect(`${actual3}`).toEqual(`array.of(${expectedTypeJson}).required`)

    const actual4 = t.array.is(expectedTypes).required
    expect(`${actual4}`).toEqual(`array.is(${expectedTypesJson}).required`)
  })
})
