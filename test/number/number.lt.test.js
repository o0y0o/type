import t from '@lib'
import { validResult } from '../helper'

describe('type.number.lt', () => {
  it('pass if number is less than specific value', () => {
    const actual = t.number.lt(-1).validate(-2)
    expect(actual).toEqual(validResult)
  })

  it('fail if number is equal to specific value', () => {
    const actual = t.number.lt(-1).validate(-1)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'lt(-1)', actual: '-1' }]
    })
  })

  it('fail if number is greater than specific value', () => {
    const actual = t.number.lt(-1).validate(0)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'lt(-1)', actual: '0' }]
    })
  })
})
