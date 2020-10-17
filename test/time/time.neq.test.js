import t from '@lib'
import { validResult } from '../model'

describe('type.time.neq', () => {
  it("pass if time isn't equal to specific value", () => {
    const actual = t.time
      .neq('2020-01-01T00:00:00.000Z')
      .validate('2020-01-01T00:00:00.001Z')
    expect(actual).toEqual(validResult)
  })

  it('fail if time is equal to specific value', () => {
    const actual = t.time
      .neq('2020-01-01T00:00:00.000Z')
      .validate(1577836800000)
    expect(actual).toEqual({
      valid: false,
      errors: [
        {
          expected: 'time.neq(2020-01-01T00:00:00.000Z)',
          actual: '1577836800000'
        }
      ]
    })
  })
})
