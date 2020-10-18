import t from '@lib'

const expected = `valueOf({
  "a": 1,
  "b": "2"
}).required`

describe('type.valueOf.toString', () => {
  it('support semantic display', () => {
    const actual1 = t.valueOf({ a: 1, b: '2' }).required
    expect(`${actual1}`).toEqual(expected)
  })
})
