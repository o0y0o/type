import t from '@lib'
import { validResult } from '../model'

describe('type.string.empty', () => {
  it('pass with empty string', () => {
    const actual = t.string.empty.validate('')
    expect(actual).toEqual(validResult)
  })

  it('fail with non-empty string', () => {
    const actual = t.string.empty.validate('foo')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'empty', actual: '"foo"' }]
    })
  })
})
