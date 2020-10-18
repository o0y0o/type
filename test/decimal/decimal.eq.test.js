import t from '@lib'
import { validResult } from '../helper'

beforeAll(() => t.decimal.extendComparisonsWithDp(2))

describe('type.decimal.eq', () => {
  it('pass if decimal is equal to specific value', () => {
    const actual = t.decimal.eq('-1.989').validate('-1.989')
    expect(actual).toEqual(validResult)
  })

  it("fail if decimal isn't equal to specific value", () => {
    const actual = t.decimal.eq('-1.989').validate('-1.98')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'eq(-1.989)', actual: '"-1.98"' }]
    })
  })
})

describe('type.decimal.eq2', () => {
  it('pass if decimal is equal to specific value', () => {
    const actual = t.decimal.eq2('-1.989').validate('-1.981')
    expect(actual).toEqual(validResult)
  })

  it("fail if decimal isn't equal to specific value", () => {
    const actual = t.decimal.eq2('-1.989').validate('-1.999')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'eq2(-1.989)', actual: '"-1.999"' }]
    })
  })
})
