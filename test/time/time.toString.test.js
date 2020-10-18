import t from '@lib'

describe('type.time.toString', () => {
  it('support semantic display', () => {
    const actual1 = t.time
      .eq(new Date('2020-01-01T00:00:00.000Z'))
      .neq(new Date('2020-01-01T00:00:00.000+08:00')).required
    const expected1 =
      'time.eq(2020-01-01T00:00:00.000Z).neq(2019-12-31T16:00:00.000Z).required'
    expect(`${actual1}`).toEqual(expected1)

    const actual2 = t.time
      .gt('2020-01-01T00:00:00.000+08:00')
      .lt('2020-01-01T00:00:00.000Z').required
    const expected2 =
      'time.gt(2020-01-01T00:00:00.000+08:00).lt(2020-01-01T00:00:00.000Z).required'
    expect(`${actual2}`).toEqual(expected2)

    const actual3 = t.time.gte(1577808000000).lte(1577836800000).required
    const expected3 = 'time.gte(1577808000000).lte(1577836800000).required'
    expect(`${actual3}`).toEqual(expected3)
  })
})
