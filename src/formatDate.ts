// @ts-nocheck
import moment from 'moment'

function formatDate(date, format = 'DD/MM/YYYY'){
  return date ? moment(date).format(format) : null
}

export default formatDate
