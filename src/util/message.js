import { isArray, isUndefined } from 'lodash'

export const stringify = (value, indent = 2) => {
  if (isArray(value)) return stringify(value, 0).replace(/,/g, ', ')

  const replacer = (_, value) => (isUndefined(value) ? 'undefined' : value)
  const json = JSON.stringify(value, replacer, indent)
  return json.replace(/"undefined"/g, 'undefined')
}
