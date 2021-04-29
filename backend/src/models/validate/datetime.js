import validate from 'validate.js'
import dayjs from 'dayjs'

validate.extend(validate.validators.datetime, {
  parse: value => {
    return +dayjs.utc(value)
  },
  format: (value, options) => {
    var format = options.dateOnly ? 'YYYY-MM-DD' : 'YYYY-MM-DD hh:mm:ss'
    return dayjs.utc(value).format(format)
  },
})
