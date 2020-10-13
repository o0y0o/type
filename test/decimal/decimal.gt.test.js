import t from '@lib'
import { validResult } from '../model'

beforeAll(() => t.decimal.extendComparisonsWithDp(2))

describe('type.decimal.gt', () => {
  it('pass if decimal is greater than specific value', () => {
    const actual = t.decimal.gt('-1.989').validate('-1.98')
    expect(actual).toEqual(validResult)
  })

  it('fail if decimal is equal to specific value', () => {
    const actual = t.decimal.gt('-1.989').validate('-1.989')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal.gt(-1.989)', actual: '"-1.989"' }]
    })
  })

  it('fail if decimal is less than specific value', () => {
    const actual = t.decimal.gt('-1.98').validate('-1.981')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal.gt(-1.98)', actual: '"-1.981"' }]
    })
  })
})

describe('type.decimal.gt2', () => {
  it('pass if decimal is greater than specific value', () => {
    const actual = t.decimal.gt2('-1.989').validate('-1.979')
    expect(actual).toEqual(validResult)
  })

  it('fail if decimal is equal to specific value', () => {
    const actual = t.decimal.gt2('-1.989').validate('-1.98')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal.gt2(-1.989)', actual: '"-1.98"' }]
    })
  })

  it('fail if decimal is less than specific value', () => {
    const actual = t.decimal.gt2('-1.989').validate('-1.999')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'decimal.gt2(-1.989)', actual: '"-1.999"' }]
    })
  })
})
