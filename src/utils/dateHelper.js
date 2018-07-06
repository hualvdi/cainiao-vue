import { dateFormat } from 'vux'

export function getDate(timestamp) {
  const formatDate = 'YYYY/MM/DD 星期E'
  const timeString = dateFormat(new Date(timestamp), formatDate)
  return timeString
}

export function getTime(timestamp) {
  return dateFormat(new Date(timestamp), 'MM.DD')
}
