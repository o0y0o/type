import { isArray, isBoolean, isFunction, isNil, isObject, negate } from 'lodash'
import { stringify } from '@util/message'

function create(name, check, nilable = true, extensions = {}) {
  if (isObject(nilable)) return create(name, check, undefined, nilable)

  const toString = () => name
  const constraint = { name, check, nilable, validate, extend, toString }
  const bulitinKeys = Object.keys(constraint)
  const mixins = {}

  extend(extensions)

  return constraint

  function validate(actual) {
    const validResult = { valid: true, errors: [] }
    if (nilable && isNil(actual)) return validResult

    const checkResult = check(actual)
    if (isBoolean(checkResult) && checkResult) return validResult
    if (!isNil(checkResult.valid)) return checkResult

    const errors = isArray(checkResult)
      ? checkResult
      : [{ expected: name, actual: stringify(actual) }]
    return errors.length ? { valid: false, errors } : validResult
  }

  function extend(key, ext) {
    if (isObject(key)) {
      for (const args of Object.entries(key)) extend(...args)
      return constraint
    }
    if (bulitinKeys.includes(key)) {
      throw new Error(`Invalid extension key: ${key}`)
    }
    Object.defineProperty(constraint, key, { get: () => compose(ext) })
    mixins[key] = ext
    return constraint
  }

  function compose(ext) {
    if (isFunction(ext)) return (...args) => compose(ext(...args))
    const extendedName = `${name}.${ext.name}`
    const extended = create(extendedName, ext.check, ext.nilable, mixins)
    const delegatedValidate = extended.validate
    extended.validate = acutal => {
      const result = constraint.validate(acutal)
      if (!result.valid) return result
      return delegatedValidate(acutal)
    }
    return extended
  }
}

const required = create('required', negate(isNil), false)

export default (...args) => {
  const constraint = create(...args)
  constraint.extend({ required })
  return constraint
}
