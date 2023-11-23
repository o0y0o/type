import { isArray, isBoolean, isFunction, isNil, isObject, negate } from 'lodash'
import { jsonify } from '@lib/util/helper'

function create(name, check, nilable = true, extensions = {}) {
  if (isObject(nilable)) return create(name, check, undefined, nilable)

  const constraint = {
    name,
    display: name,
    check,
    nilable,
    validate,
    extend,
    toString
  }
  const builtinKeys = Object.keys(constraint)
  const mixins = {}

  extend(extensions)

  return constraint

  function validate(actual, context) {
    const validResult = { valid: true, errors: [] }
    if (nilable && isNil(actual)) return validResult

    const checkResult = check(actual, context)
    if (isBoolean(checkResult) && checkResult) return validResult
    if (!isNil(checkResult.valid)) return checkResult

    const errors = isArray(checkResult)
      ? checkResult
      : [{ expected: name, actual: jsonify(actual) }]
    return errors.length ? { valid: false, errors } : validResult
  }

  function extend(key, ext) {
    if (isObject(key)) {
      for (const args of Object.entries(key)) extend(...args)
      return constraint
    }
    if (builtinKeys.includes(key)) {
      throw new Error(`Invalid extension key: ${key}`)
    }
    Object.defineProperty(constraint, key, { get: () => compose(ext) })
    mixins[key] = ext
    return constraint
  }

  function compose(ext) {
    if (isFunction(ext)) return (...args) => compose(ext(...args))
    const extended = create(ext.name, ext.check, ext.nilable, mixins)
    extended.display = `${constraint}.${ext.name}`
    const delegatedValidate = extended.validate
    extended.validate = (actual, context) => {
      const result = constraint.validate(actual, context)
      if (!result.valid) return result
      return delegatedValidate(actual, context)
    }
    return extended
  }

  function toString() {
    return constraint.display
  }
}

const required = create('required', negate(isNil), false)

export default (...args) => {
  const constraint = create(...args)
  constraint.extend({ required })
  return constraint
}
