import t from '@lib'
import { validResult } from '../model'

describe('type.string.match', () => {
  it('pass if string matches specific regexp', () => {
    const actual = t.string.match(/^\d+$/).validate('123')
    expect(actual).toEqual(validResult)
  })

  it("fail if string does't match specific regexp", () => {
    const actual = t.string.match(/^\d+$/).validate('foo')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'string.match(/^\\d+$/)', actual: '"foo"' }]
    })
  })
})
