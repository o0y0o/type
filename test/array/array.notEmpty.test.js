import t from '@lib'
import { validResult } from '../model'

describe('type.array.notEmpty', () => {
  it('pass with non-empty array', () => {
    const actual = t.array.notEmpty.validate([1])
    expect(actual).toEqual(validResult)
  })

  it('fail with empty array', () => {
    const actual = t.array.notEmpty.validate([])
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'array.notEmpty', actual: '[]' }]
    })
  })
})
