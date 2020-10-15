import { isNil } from 'lodash'
import constraint from '@lib/util/constraint'

export default constraint('nil', isNil)
