import { isArray, isUndefined } from 'lodash'

const stringifyObj = (value, indent = 2) => {
  const replacer = (_, value) => (isUndefined(value) ? 'undefined' : value)
  const json = JSON.stringify(value, replacer, indent)
  return json.replace(/"undefined"/g, 'undefined')
}

const stringifyArray = value => stringifyObj(value, 0).replace(/,/g, ', ')

export const stringify = (value, indent) =>
  isArray(value) ? stringifyArray(value) : stringifyObj(value, indent)
