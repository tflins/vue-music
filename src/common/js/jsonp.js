import originJSONP from 'jsonp'

function param(data) {
  let url = ''
  for (let key in data) {
    let value = data[key] ? data[key] : ''
    url += `&${key}=${encodeURIComponent(value)}`
  }
  // 删除第一个&
  return url ? url.substring(1) : ''
}

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') === -1) ? '?' : '&' + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
