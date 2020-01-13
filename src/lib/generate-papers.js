const promisify = require('util').promisify
const mkdir = promisify(require('mkdirp'))
const writeFile = promisify(require('fs').writeFile)
const dotenv = require('dotenv-safe').config()
const Dropbox = require('dropbox').Dropbox
const fetch = require('node-fetch')

const DATA_DIRECTORY = `./src/static/data/papers/`

const removeTitle = doc => doc.split('\n').slice(1).join('\n').trim()

const savePaperLocally = (doc, id) => {
  return mkdir(DATA_DIRECTORY)
    .then(() => writeFile(`${DATA_DIRECTORY}${id}.md`, removeTitle(doc.fileBinary.toString('utf8')), 'utf8'))
}

module.exports = id => {
  if (!id) {
    return
  }

  const dropbox = new Dropbox({
    accessToken: process.env.DROPBOX_ACCESS_TOKEN,
    fetch
  })

  return dropbox
    .paperDocsDownload({ doc_id: id, export_format: 'markdown' })
    .then(response => savePaperLocally(response, id))
}
