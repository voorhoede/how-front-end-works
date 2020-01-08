import axios from 'axios'

export default function (index, type = 'json') {
  const url = `/data/${index}.${type}`

  if (process.client) {
    // On client load over http
    return axios(url).then(res => res.data)
  } else {
    // On server load from file system
    const data = type === 'json'
      ? JSON.parse(require('fs').readFileSync(`src/static${url}`, 'utf8'))
      : require('fs').readFileSync(`src/static${url}`, 'utf8')
    return Promise.resolve(data)
  }
}