import { fill } from 'lodash'

export const validResult = { valid: true, errors: [] }

export const indent = (value, spaces = 2) =>
  value
    .split('\n')
    .map(line => `${fill(Array(spaces), ' ').join('')}${line}`)
    .join('\n')
