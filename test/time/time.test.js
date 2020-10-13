import t from '@lib'
import { validResult } from '../model'

describe('type.time', () => {
  it('pass with undefined value', () => {
    const actual = t.time.validate(undefined)
    expect(actual).toEqual(validResult)
  })

  it('pass with null value', () => {
    const actual = t.time.validate(null)
    expect(actual).toEqual(validResult)
  })

  it('pass with iso8601 string', () => {
    const actual = t.time.validate('2020-01-01T00:00:00.000Z')
    expect(actual).toEqual(validResult)
  })

  it('pass with timestamp number', () => {
    const actual = t.time.validate(1577836800000)
    expect(actual).toEqual(validResult)
  })

  it('fail with non-iso8601 string', () => {
    const actual = t.time.validate('20200101')
    expect(actual).toEqual({
      valid: false,
      errors: [{ expected: 'time', actual: '"20200101"' }]
    })
  })

  it('support extensions', () => {
    const actual = t.time
      .gt('2019-01-01T00:00:00.000Z')
      .required.validate('2020-01-01T00:00:00.000Z')
    expect(actual).toEqual(validResult)
  })
})
