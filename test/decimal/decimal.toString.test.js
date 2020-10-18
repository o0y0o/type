import t from '@lib'

describe('type.decimal.toString', () => {
  it('support semantic display', () => {
    const actual1 = t.decimal.eq('-1.990').neq('-1.99').required
    expect(`${actual1}`).toEqual('decimal.eq(-1.990).neq(-1.99).required')

    const actual2 = t.decimal.gt('-1.99').lt('1.99').required
    expect(`${actual2}`).toEqual('decimal.gt(-1.99).lt(1.99).required')

    const actual3 = t.decimal.gte('-1.99').lte('1.99').required
    expect(`${actual3}`).toEqual('decimal.gte(-1.99).lte(1.99).required')
  })
})
