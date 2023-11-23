# @0y0/type · [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/o0y0o/type/blob/master/LICENSE) [![npm](https://img.shields.io/npm/v/@0y0/type.svg)](https://www.npmjs.com/package/@0y0/type) ![Package Status](https://github.com/o0y0o/type/workflows/Package/badge.svg) ![Test Status](https://github.com/o0y0o/type/workflows/Test/badge.svg)

Type checking utils.

## Installation

```sh
npm install @0y0/type --save
```

## Usage

```js
const t = require('@0y0/type')

const objConstraint = t.object.is({
  num: t.number.gte(0).required,
  str: t.string.match(/\d+/).required
}).required

const result = objConstraint.validate({ num: 1, str: '1' })
// result = { valid: true, errors: [] }

const result = objConstraint.validate({ num: 0, str: '1' })
// result = {
//  valid: false,
//  errors: [{ name: 'num', expected: 'gte(0)', actual: 0 }]
// }
```

## Built-in constraints

- `bool`
  - `bool.required`
  - `bool.truthy`
  - `bool.falsy`
- `number`
  - `number.required`
  - `number.eq(<number>)`
  - `number.neq(<number>)`
  - `number.gt(<number>)`
  - `number.gte(<number>)`
  - `number.lt(<number>)`
  - `number.lte(<number>)`
- `decimal`
  - `decimal.required`
  - `decimal.eq(<number|string>)`
  - `decimal.neq(<number|string>)`
  - `decimal.gt(<number|string>)`
  - `decimal.gte(<number|string>)`
  - `decimal.lt(<number|string>)`
  - `decimal.lte(<number|string>)`
- `string`
  - `string.required`
  - `string.lenEq(<number>)`
  - `string.empty`
  - `string.notEmpty`
  - `string.match(<regexp>)`
- `time`
  - `time.required`
  - `time.eq(<number|string|Date>)`
  - `time.neq(<number|string|Date>)`
  - `time.gt(<number|string|Date>)`
  - `time.gte(<number|string|Date>)`
  - `time.lt(<number|string|Date>)`
  - `time.lte(<number|string|Date>)`
- `array`
  - `array.required`
  - `array.lenEq(<number>)`
  - `array.empty`
  - `array.notEmpty`
  - `array.of(<itemConstraint>)`
  - `array.is([<itemConstraint>, ...])`
- `object`
  - `object.required`
  - `object.eq(<object>)`
  - `object.match(<object>)`
  - `object.is({ key: <constraint>, ... })`
  - `object.like({ key: <constraint>, ... })`
- `nil`
- `eq(<any>)`
  - `eq(<any>).required`
- `neq(<any>)`
  - `neq(<any>).required`
- `oneOf([<any>, ...])`
  - `oneOf([<any>, ...]).required`
- `valueOf({ key: <any>, ... })`
  - `valueOf({ key: <any>, ... }).required`
- `use`
  - `use(({ parent, value }) => constraint).required`

## License

[MIT](https://github.com/o0y0o/type/blob/master/LICENSE)
