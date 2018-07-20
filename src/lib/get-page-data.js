export default function (index) {
  const url = `static/data/${index}.json`

  if (process.client) {
    // On client load over http
    return fetch(url).then(res => res.json())
  } else {
    // On server load from file system
    const data = JSON.parse(require('fs').readFileSync(`src/${url}`, 'utf8'))
    return Promise.resolve(data)
  }
}