import { isArray, isUndefined } from 'lodash'

const jsonifyObj = (value, indent = 2) => {
  const replacer = (_, value) => (isUndefined(value) ? 'undefined' : value)
  const json = JSON.stringify(value, replacer, indent)
  return json.replace(/"undefined"/g, 'undefined').replace(/\{2}/g, '\\')
}

const jsonifyArray = value => jsonifyObj(value, 0).replace(/,/g, ', ')

const jsonify = (value, indent) =>
  isArray(value) ? jsonifyArray(value) : jsonifyObj(value, indent)

const joinPath = (path1, path2) =>
  [path1, path2].filter(Boolean).join('.').replace(/\.\[/g, '[')

const joinErrorName = name => error => ({
  ...error,
  name: joinPath(name, error.name)
})

export { jsonify, joinErrorName }
