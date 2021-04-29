import Validate from 'validate.js'

Validate.validators.invalid = (value, options) => {
  return options.message
}
