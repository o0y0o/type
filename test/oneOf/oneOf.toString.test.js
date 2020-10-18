import t from '@lib'

describe('type.oneOf.toString', () => {
  it('support semantic display', () => {
    const actual1 = t.oneOf([1, '2']).required
    expect(`${actual1}`).toEqual('oneOf([1, "2"]).required')

    const actual2 = t.oneOf([1, '2', {}]).required
    expect(`${actual2}`).toEqual('oneOf([\n  1,\n  "2",\n  {}\n]).required')
  })
})
