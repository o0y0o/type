import t from '@lib'
import { validResult } from '../model'

describe('type.bool.truthy', () => {
  it('pass if bool is truthy', () => {
    const actual = t.bool.truthy.validate(true)
    expect(actual).toEqual(validResult)
  })

  it("fail if bool isn't truthy", () => {
    const actual = t.bool.truthy.validate(false)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'truthy', actual: 'false' }]
    })
  })
})
