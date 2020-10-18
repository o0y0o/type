import t from '@lib'

describe('type.nil.toString', () => {
  it('support semantic display', () => {
    const actual = t.nil
    expect(`${actual}`).toEqual('nil')
  })
})
