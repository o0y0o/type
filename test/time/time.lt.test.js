import t from '@lib'

describe('type.time.lt', () => {
  it('pass if time is less than specific value', () => {
    const actual = t.time
      .lt('2020-01-01T00:00:00.000Z')
      .validate('2020-01-01T00:00:00.000+08:00')
    expect(actual).toEqual({ valid: true })
  })

  it('fail if time is equal to specific value', () => {
    const actual = t.time
      .lt('2020-01-01T00:00:00.000Z')
      .validate('2020-01-01T00:00:00.000Z')
    expect(actual).toEqual({
      valid: false,
      errors: [
        {
          expected: 'time.lt("2020-01-01T00:00:00.000Z")',
          actual: '"2020-01-01T00:00:00.000Z"'
        }
      ]
    })
  })

  it('fail if time is greater than specific value', () => {
    const actual = t.time
      .lt('2020-01-01T00:00:00.000+08:00')
      .validate('2020-01-01T00:00:00.000Z')
    expect(actual).toEqual({
      valid: false,
      errors: [
        {
          expected: 'time.lt("2020-01-01T00:00:00.000+08:00")',
          actual: '"2020-01-01T00:00:00.000Z"'
        }
      ]
    })
  })
})
