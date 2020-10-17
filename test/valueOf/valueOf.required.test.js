import t from '@lib'
import { validResult } from '../model'

const expected = { a: 1, b: 2 }

const expectedMsg = `valueOf({
  "a": 1,
  "b": 2
}).required`

describe('type.valueOf.required', () => {
  it('pass with any contained value', () => {
    const actual = t.valueOf(expected).required.validate(1)
    expect(actual).toEqual(validResult)
  })

  it('fail with undefined value', () => {
    const actual = t.valueOf(expected).required.validate(undefined)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: expectedMsg, actual: 'undefined' }]
    })
  })

  it('fail with null value', () => {
    const actual = t.valueOf(expected).required.validate(null)
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: expectedMsg, actual: 'null' }]
    })
  })
})
