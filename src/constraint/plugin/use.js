import constraint from '@lib/util/constraint'

export default constraintCreator =>
  constraint('use', (actual, context) =>
    constraintCreator({ ...context, value: actual }).validate(actual, context)
  )
