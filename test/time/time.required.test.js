import t from '@lib'
import { validResult } from '../model'

describe('type.time.required', () => {
  it('pass with any time', () => {
    const actual = t.time.required.validate(1)
    expect(actual).toEqual(validResult)
  })

  it('fail with undefined value', () => {
    const actual = t.time.required.validate(undefined)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'time.required', actual: 'undefined' }]
    })
  })

  it('fail with null value', () => {
    const actual = t.time.required.validate(null)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'time.required', actual: 'null' }]
    })
  })
})
