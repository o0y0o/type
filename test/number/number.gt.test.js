import t from '@lib'
import { validResult } from '../helper'

describe('type.number.gt', () => {
  it('pass if number is greater than specific value', () => {
    const actual = t.number.gt(-1).validate(1)
    expect(actual).toEqual(validResult)
  })

  it('fail if number is equal to specific value', () => {
    const actual = t.number.gt(-1).validate(-1)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'gt(-1)', actual: '-1' }]
    })
  })

  it('fail if number is less than specific value', () => {
    const actual = t.number.gt(-1).validate(-2)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'gt(-1)', actual: '-2' }]
    })
  })
})
