import t from '@lib'
import { validResult } from '../helper'

describe('type.number.gte', () => {
  it('pass if number is greater than specific value', () => {
    const actual = t.number.gte(-1).validate(1)
    expect(actual).toEqual(validResult)
  })

  it('pass if number is equal to specific value', () => {
    const actual = t.number.gte(-1).validate(-1)
    expect(actual).toEqual(validResult)
  })

  it('fail if number is less than specific value', () => {
    const actual = t.number.gte(-1).validate(-2)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'gte(-1)', actual: '-2' }]
    })
  })
})
