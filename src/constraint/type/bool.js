import { isBoolean } from 'lodash'
import constraint from '@util/createConstraint'

export default constraint('bool', isBoolean, {
  truthy: constraint('truthy', actual => actual),
  falsy: constraint('falsy', actual => !actual)
})
