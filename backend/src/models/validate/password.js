import Validate from 'validate.js'

const password = value => {
  if (/[a-z]+|[A-Z]+/.test(value) && /\d/.test(value)) {
    return true
  }
  return false
}

Validate.validators.password = (value, options) => {
  const valid = password(value)
  return valid ? undefined : options.message
}
