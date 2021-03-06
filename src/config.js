import invariant from 'invariant'

function isFunc(fn) {
  return typeof fn === 'function'
}

function isOptionalFunc(fn) {
  return !fn || isFunc(fn)
}

export function isValidConfig(config) {
  return (
    isFunc(config.getPropName) &&
    (!config.handleChange || isFunc(config.getHandlerName)) &&
    isOptionalFunc(config.getDisplayName) &&
    isOptionalFunc(config.getInitialState) &&
    isOptionalFunc(config.getPropTypes) &&
    isOptionalFunc(config.handleChange) &&
    isOptionalFunc(config.componentWillMount) &&
    isOptionalFunc(config.componentWillReceiveProps) &&
    isOptionalFunc(config.componentWillUnmount)
  )
}

export function enforceValidConfig(config) {
  invariant(
    isValidConfig(config),
    'invalid configuration'
  )
  return config
}
