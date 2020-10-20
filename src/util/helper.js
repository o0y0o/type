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

const jsonifyObjVal = value => {
  switch (true) {
    case isUndefined(value):
      return undefinedTag
    case isConstraint(value):
      return `${constraintTagBegin}${value}${constraintTagEnd}`
  }
  return value
}

const formatConstraintJson = json => json.replace(/\\n/g, '\n  ')

const jsonifyObj = (value, indent = 2) => {
  const json = JSON.stringify(value, (_, v) => jsonifyObjVal(v), indent)
  return json
    .replace(undefinedTagRegExp, 'undefined')
    .replace(constraintTagRegExp, (_, v) => formatConstraintJson(v))
    .replace(/\\{2}/g, '\\')
    .replace(/\\"/g, '"')
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
