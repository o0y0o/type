import t from '@lib'
import { validResult } from '../helper'

beforeAll(() => t.decimal.extendComparisonsWithDp(2))

describe('type.decimal.gte', () => {
  it('pass if decimal is greater than specific value', () => {
    const actual = t.decimal.gte('-1.989').validate('-1.98')
    expect(actual).toEqual(validResult)
  })

  it('pass if decimal is equal to specific value', () => {
    const actual = t.decimal.gte('-1.989').validate('-1.989')
    expect(actual).toEqual(validResult)
  })

  it('fail if decimal is less than specific value', () => {
    const actual = t.decimal.gte('-1.98').validate('-1.981')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'gte(-1.98)', actual: '"-1.981"' }]
    })
  })
})

describe('type.decimal.gte2', () => {
  it('pass if decimal is greater than specific value', () => {
    const actual = t.decimal.gte2('-1.989').validate('-1.981')
    expect(actual).toEqual(validResult)
  })

  it('pass if decimal is equal to specific value', () => {
    const actual = t.decimal.gte2('-1.989').validate('-1.98')
    expect(actual).toEqual(validResult)
  })

  it('fail if decimal is less than specific value', () => {
    const actual = t.decimal.gte2('-1.989').validate('-1.999')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'gte2(-1.989)', actual: '"-1.999"' }]
    })
  })
})
