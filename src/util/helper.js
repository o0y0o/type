import {
  every,
  isArray,
  isFunction,
  isObjectLike,
  isUndefined,
  negate
} from 'lodash'

const undefinedTag = '<undefined>'
const undefinedTagRegExp = new RegExp(`"${undefinedTag}"`, 'g')
const constraintTagBegin = '<constraint>'
const constraintTagEnd = '</constraint>'
const constraintTagPattern = `"${constraintTagBegin}(.+)${constraintTagEnd}"`
const constraintTagRegExp = new RegExp(constraintTagPattern, 'g')

const isConstraint = value => isFunction(value?.validate)

const jsonifyObjVal = (_, value) => {
  switch (true) {
    case isUndefined(value):
      return undefinedTag
    case isConstraint(value):
      return `${constraintTagBegin}${value}${constraintTagEnd}`
  }
  return value
}

const jsonifyObj = (value, indent = 2) => {
  const json = JSON.stringify(value, jsonifyObjVal, indent)
  return json
    .replace(undefinedTagRegExp, 'undefined')
    .replace(constraintTagRegExp, '$1')
    .replace(/\\{2}/g, '\\')
    .replace(/\\"/g, '"')
    .replace(/\\n/g, '\n  ')
}

const isShortArray = value =>
  isArray(value) && every(value, negate(isObjectLike))

const jsonifyShortArray = value => jsonifyObj(value, 0).replace(/,/g, ', ')

const jsonify = (value, indent) =>
  isShortArray(value) ? jsonifyShortArray(value) : jsonifyObj(value, indent)

const joinPath = (path1, path2) =>
  [path1, path2].filter(Boolean).join('.').replace(/\.\[/g, '[')

const joinErrorName = name => error => ({
  ...error,
  name: joinPath(name, error.name)
})

export { jsonify, joinErrorName }
