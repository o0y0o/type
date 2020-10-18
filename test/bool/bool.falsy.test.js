import t from '@lib'
import { validResult } from '../helper'

describe('type.bool.falsy', () => {
  it('pass if bool is falsy', () => {
    const actual = t.bool.falsy.validate(false)
    expect(actual).toEqual(validResult)
  })

  it("fail if bool isn't falsy", () => {
    const actual = t.bool.falsy.validate(true)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'falsy', actual: 'true' }]
    })
  })
})
