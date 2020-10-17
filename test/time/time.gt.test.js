import t from '@lib'
import { validResult } from '../model'

describe('type.time.gt', () => {
  it('pass if time is greater than specific value', () => {
    const actual = t.time
      .gt('2020-01-01T00:00:00.000Z')
      .validate('2020-01-01T00:00:00.001Z')
    expect(actual).toEqual(validResult)
  })

  it('fail if time is equal to specific value', () => {
    const actual = t.time
      .gt('2020-01-01T00:00:00.000Z')
      .validate('2020-01-01T00:00:00.000Z')
    expect(actual).toEqual({
      valid: false,
      errors: [
        {
          expected: 'gt(2020-01-01T00:00:00.000Z)',
          actual: '"2020-01-01T00:00:00.000Z"'
        }
      ]
    })
  })

  it('fail if time is less than specific value', () => {
    const actual = t.time
      .gt('2020-01-01T00:00:00.000Z')
      .validate('2020-01-01T00:00:00.000+08:00')
    expect(actual).toEqual({
      valid: false,
      errors: [
        {
          expected: 'gt(2020-01-01T00:00:00.000Z)',
          actual: '"2020-01-01T00:00:00.000+08:00"'
        }
      ]
    })
  })
})
