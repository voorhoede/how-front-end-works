const { mkdir, writeFile } = require('fs').promises
const dotenv = require('dotenv').config()
const Dropbox = require('dropbox').Dropbox
const fetch = require('isomorphic-fetch')

const dataDir = `src/static/data/papers/`

const savePaperLocally = (doc, ID) => {
  mkdir(dataDir, { recursive: true }).then(() =>
    writeFile(`${dataDir}${ID}.md`, '#' + doc.fileBinary)
  )
}

module.exports = ID => {
  if (ID === null) return
  const dbx = new Dropbox({
    accessToken: process.env.DROPBOX_ACCESS_TOKEN,
    fetch
  })

  return dbx
    .paperDocsDownload({ doc_id: ID, export_format: 'markdown' })
    .then(response => savePaperLocally(response, ID))
}
