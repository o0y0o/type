import t from '@lib'
import { validResult } from '../helper'

describe('type.array.empty', () => {
  it('pass with empty array', () => {
    const actual = t.array.empty.validate([])
    expect(actual).toEqual(validResult)
  })

  it('fail with non-empty array', () => {
    const actual = t.array.empty.validate([1])
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'empty', actual: '[1]' }]
    })
  })
})
