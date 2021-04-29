import Validate from 'validate.js'

const phoneValidator = value => {
  let length = 0
  if (
    value.split('').every(s => {
      if (s === '-') return true
      if (/[0-9]/.test(s)) {
        length++
        return true
      }
    })
  ) {
    if (/^\+886/.test(value) || /^886/.test(value)) {
      if (length > 10) return true
    }
    if (/^09/.test(value) && length === 10) return true
    if (/^0/.test(value) && length > 8 && value[2] === '-') return true
  }
  return false
}

Validate.validators.phone = (value, options) => {
  const valid = phoneValidator(value)
  return valid ? undefined : options.message
}
