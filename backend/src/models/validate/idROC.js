/* eslint-disable comma-spacing */
import Validate from 'validate.js'

const identityValidator = value => {
  // eslint-disable-next-line no-array-constructor
  const letter = new Array(
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'M',
    'N',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'X',
    'Y',
    'W',
    'Z',
    'I',
    'O'
  )
  // eslint-disable-next-line no-array-constructor
  const digital = new Array(1, 9, 8, 7, 6, 5, 4, 3, 2, 1)
  const integerArray = new Array(2)

  let toUpperCase
  let plusTen
  let charAt
  let validNumber = 0
  const rule = /^[a-z](1|2)\d{8}$/i

  if (value.search(rule) === -1) {
    return false
  } else {
    toUpperCase = value.charAt(0).toUpperCase()
    charAt = value.charAt(9)
  }
  for (let i = 0; i < 26; i++) {
    if (toUpperCase === String(letter[i])) {
      plusTen = i + 10 // 10
      integerArray[0] = Math.floor(plusTen / 10)
      integerArray[1] = plusTen - integerArray[0] * 10
      break
    }
  }
  for (let i = 0; i < digital.length; i++) {
    if (i < 2) {
      validNumber += integerArray[i] * digital[i]
    } else {
      validNumber += parseInt(value.charAt(i - 1)) * digital[i]
    }
  }
  if (validNumber % 10 === charAt) {
    return true
  }
  if (10 - (validNumber % 10) !== charAt) {
    return false
  }
  return true
}

Validate.validators.identityROC = (value, options) => {
  const valid = identityValidator(value)
  return valid ? undefined : options.message
}
