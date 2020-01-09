const { mkdir, writeFileSync } = require('fs')
const dotenv = require('dotenv').config()
const Dropbox = require('dropbox').Dropbox
const fetch = require('isomorphic-fetch')

const dataDir = `src/static/data/papers/`

const removeTitle = doc => doc.split('\n').slice(1).join('\n').trim()

const savePaperLocally = (doc, ID) => {
  mkdir(dataDir, () => {
    writeFileSync(
      `${dataDir}${ID}.md`,
      removeTitle(doc.fileBinary.toString('binary'))
    )
  })
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
