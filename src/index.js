import use from '@constraint/plugin/use'
import array from '@constraint/type/array'
import bool from '@constraint/type/bool'
import decimal from '@constraint/type/decimal'
import nil from '@constraint/type/nil'
import number from '@constraint/type/number'
import object from '@constraint/type/object'
import string from '@constraint/type/string'
import time from '@lib/constraint/type/time'
import eq from '@constraint/value/eq'
import neq from '@constraint/value/neq'
import oneOf from '@constraint/value/oneOf'
import valueOf from '@constraint/value/valueOf'
import createConstraint from '@util/constraint'

export default {
  create: createConstraint,
  array,
  bool,
  decimal,
  nil,
  number,
  object,
  string,
  time,
  eq,
  neq,
  oneOf,
  use,
  valueOf
}
