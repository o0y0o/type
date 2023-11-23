import t from '@lib'
import { validResult } from '../helper'

const expected = t.object.is({
  isNumber1: t.bool.required,
  array1: t.array.of(
    t.object.is({
      isNumber11: t.bool.required,
      object: t.object.is({
        isNumber111: t.bool.required,
        value: t.use(({ parent }) =>
          parent.value.isNumber111 ||
          parent.parent.value.isNumber11 ||
          parent.parent.parent.value.isNumber1
            ? t.number
            : t.string
        ).required
      }).required
    }).required
  ).required,
  isNumber2: t.bool.required,
  array2: t.array.is([
    t.object.is({
      isNumber21: t.bool.required,
      object: t.object.is({
        isNumber211: t.bool.required,
        value: t.use(({ parent }) =>
          parent.value.isNumber211 ||
          parent.parent.value.isNumber21 ||
          parent.parent.parent.value.isNumber2
            ? t.number
            : t.string
        ).required
      }).required
    }).required,
    t.object.is({
      isNumber22: t.bool.required,
      object: t.object.is({
        isNumber221: t.bool.required,
        value: t.use(({ parent }) =>
          parent.value.isNumber221 ||
          parent.parent.value.isNumber22 ||
          parent.parent.parent.value.isNumber2
            ? t.number
            : t.string
        ).required
      }).required
    }).required
  ])
}).required

const actualGood1 = {
  isNumber1: false,
  array1: [
    { isNumber11: false, object: { isNumber111: true, value: 1 } },
    { isNumber11: false, object: { isNumber111: false, value: '1' } }
  ],
  isNumber2: false,
  array2: [
    { isNumber21: false, object: { isNumber211: true, value: 1 } },
    { isNumber22: false, object: { isNumber221: false, value: '1' } }
  ]
}

const actualBad1 = {
  isNumber1: false,
  array1: [
    { isNumber11: false, object: { isNumber111: true, value: '1' } },
    { isNumber11: false, object: { isNumber111: false, value: 1 } }
  ],
  isNumber2: false
}

const actualBad1Errors = [
  { name: 'array1[0].object.value', expected: 'number', actual: '"1"' },
  { name: 'array1[1].object.value', expected: 'string', actual: '1' }
]

const actualGood2 = {
  isNumber1: false,
  array1: [
    { isNumber11: true, object: { isNumber111: false, value: 1 } },
    { isNumber11: false, object: { isNumber111: false, value: '1' } }
  ],
  isNumber2: false,
  array2: [
    { isNumber21: true, object: { isNumber211: false, value: 1 } },
    { isNumber22: false, object: { isNumber221: false, value: '1' } }
  ]
}

const actualGood3 = {
  isNumber1: true,
  array1: [
    { isNumber11: false, object: { isNumber111: false, value: 1 } },
    { isNumber11: false, object: { isNumber111: false, value: 1 } }
  ],
  isNumber2: true,
  array2: [
    { isNumber21: false, object: { isNumber211: false, value: 1 } },
    { isNumber22: false, object: { isNumber221: false, value: 1 } }
  ]
}

describe('type.use', () => {
  it('pass if value fulfills dynamic constraint with parent reference', () => {
    const actual = expected.validate(actualGood1)
    expect(actual).toEqual(validResult)
  })

  it("fail if value doesn't fulfill dynamic constraint with parent reference", () => {
    const actual = expected.validate(actualBad1)
    expect(actual).toEqual({ valid: false, errors: actualBad1Errors })
  })

  it('pass if value fulfills dynamic constraint with grandparent reference', () => {
    const actual = expected.validate(actualGood2)
    expect(actual).toEqual(validResult)
  })

  it('pass if value fulfills dynamic constraint with great-grandparent reference', () => {
    const actual = expected.validate(actualGood3)
    expect(actual).toEqual(validResult)
  })
})
