import t from '@lib'
import { validResult } from '../helper'

describe('type.string.notEmpty', () => {
  it('pass with non-empty string', () => {
    const actual = t.string.notEmpty.validate('foo')
    expect(actual).toEqual(validResult)
  })

  it('fail with empty string', () => {
    const actual = t.string.notEmpty.validate('')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'notEmpty', actual: '""' }]
    })
  })
})
