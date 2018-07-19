export default function ({ lemma }) {
  const url = `data/lemmas/${lemma}.json`

  if (process.client) {
    // On client load over http
    return fetch(url).then(res => res.json())
  } else {
    // On server load from file system
    const data = JSON.parse(require('fs').readFileSync(`src/static/${url}`, 'utf8'))
    return Promise.resolve(data)
  }
}