import t from '@lib'

describe('type.number.toString', () => {
  it('support semantic display', () => {
    const actual1 = t.number.eq(-1.99).neq(-1.99).required
    expect(`${actual1}`).toEqual('number.eq(-1.99).neq(-1.99).required')

    const actual2 = t.number.gt(-1.99).lt(1.99).required
    expect(`${actual2}`).toEqual('number.gt(-1.99).lt(1.99).required')

    const actual3 = t.number.gte(-1.99).lte(1.99).required
    expect(`${actual3}`).toEqual('number.gte(-1.99).lte(1.99).required')
  })
})
