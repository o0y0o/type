import t from '@lib'

describe('type.string.toString', () => {
  it('support semantic display', () => {
    const actual1 = t.string.match(/^(\d+)\.(\d)+$/).required
    expect(`${actual1}`).toEqual('string.match(/^(\\d+)\\.(\\d)+$/).required')

    const actual2 = t.string.notEmpty.lenEq(3).required
    expect(`${actual2}`).toEqual('string.notEmpty.lenEq(3).required')

    const actual3 = t.string.lenEq(0).empty.required
    expect(`${actual3}`).toEqual('string.lenEq(0).empty.required')
  })
})
