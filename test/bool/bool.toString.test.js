import t from '@lib'

describe('type.bool.toString', () => {
  it('support semantic display', () => {
    const actual1 = t.bool.truthy.required
    expect(`${actual1}`).toEqual('bool.truthy.required')

    const actual2 = t.bool.falsy.required
    expect(`${actual2}`).toEqual('bool.falsy.required')
  })
})
