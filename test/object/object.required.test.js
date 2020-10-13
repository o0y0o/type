import t from '@lib'
import { validResult } from '../model'

describe('type.object.required', () => {
  it('pass with any object', () => {
    const actual = t.object.required.validate({})
    expect(actual).toEqual(validResult)
  })

  it('fail with undefined value', () => {
    const actual = t.object.required.validate(undefined)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'object.required', actual: 'undefined' }]
    })
  })

  it('fail with null value', () => {
    const actual = t.object.required.validate(null)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'object.required', actual: 'null' }]
    })
  })
})
