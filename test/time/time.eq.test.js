import t from '@lib'
import { validResult } from '../helper'

describe('type.time.eq', () => {
  it('pass if time is equal to specific value', () => {
    const actual = t.time
      .eq('2020-01-01T00:00:00.000Z')
      .validate('2020-01-01T08:00:00.000+08:00')
    expect(actual).toEqual(validResult)
  })

  it("fail if time isn't equal to specific value", () => {
    const actual = t.time
      .eq('2020-01-01T00:00:00.000Z')
      .validate('2020-01-01T00:00:00.001Z')
    expect(actual).toEqual({
      valid: false,
      errors: [
        {
          expected: 'eq(2020-01-01T00:00:00.000Z)',
          actual: '"2020-01-01T00:00:00.001Z"'
        }
      ]
    })
  })
})
