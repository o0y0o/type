import t from '@lib'
import { validResult } from '../helper'

describe('type.time.lte', () => {
  it('pass if time is less than specific value', () => {
    const actual = t.time
      .lte('2020-01-01T00:00:00.000Z')
      .validate('2020-01-01T00:00:00.000+08:00')
    expect(actual).toEqual(validResult)
  })

  it('pass if time is equal to specific value', () => {
    const actual = t.time
      .lte('2020-01-01T00:00:00.000Z')
      .validate('2020-01-01T08:00:00.000+08:00')
    expect(actual).toEqual(validResult)
  })

  it('fail if time is greater than specific value', () => {
    const actual = t.time
      .lte('2020-01-01T00:00:00.000+08:00')
      .validate('2020-01-01T00:00:00.000Z')
    expect(actual).toEqual({
      valid: false,
      errors: [
        {
          expected: 'lte(2020-01-01T00:00:00.000+08:00)',
          actual: '"2020-01-01T00:00:00.000Z"'
        }
      ]
    })
  })
})
