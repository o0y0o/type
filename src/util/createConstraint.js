import { isFunction, isNil, isObject, negate } from 'lodash'
import { stringify } from '@util/message'

function create(name, check, nilable = true, extensions = {}) {
  if (isObject(nilable)) return create(name, check, undefined, nilable)

  const constraint = { name, check, nilable, validate, extend }
  const bulitinKeys = Object.keys(constraint)
  const mixins = {}

  extend(extensions)

  return constraint

  function validate(actual) {
    if ((nilable && isNil(actual)) || check(actual)) return { valid: true }
    const error = { expected: name, actual: stringify(actual) }
    return { valid: false, errors: [error] }
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
