import { isBoolean } from 'lodash'
import constraint from '@lib/util/constraint'

export default constraint('bool', isBoolean, {
  truthy: constraint('truthy', actual => actual),
  falsy: constraint('falsy', actual => !actual)
})
