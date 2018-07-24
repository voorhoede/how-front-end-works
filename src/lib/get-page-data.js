import axios from 'axios'

export default function (index) {
  const url = `/data/${index}.json`

  if (process.client) {
    // On client load over http
    return axios(url).then(res => res.data)
  } else {
    // On server load from file system
    const data = JSON.parse(require('fs').readFileSync(`src/static${url}`, 'utf8'))
    return Promise.resolve(data)
  }
}