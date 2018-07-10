const dataDir = `src/static/data/`

module.exports = (dato, root, i18n) => {
  root.createDataFile(`${dataDir}index.json`, 'json', generateIndexPage(dato))
}

function generateIndexPage (dato) {
  return {
    concepts: dato.concepts.map(concept => {
      return {
        color: concept.color.hex,
        description: concept.description,
        icon: concept.icon.url(),
        image: concept.image.url(),
        lemmas: concept.lemmas.map(lemma => {
          return {
            name: lemma.name
          }
        }),
        name: concept.name
      }
    }),
    introduction: dato.siteInfo.introduction,
    footer: dato.siteInfo.footer,
    seo: {
      title: dato.siteInfo.seo.title,
      description: dato.siteInfo.seo.description,
      image: {
        url: dato.siteInfo.seo.image.url(),
        width: dato.siteInfo.seo.image.width,
        height: dato.siteInfo.seo.image.height
      }
    },
    title: dato.siteInfo.title
  }
}

function removeSeoMetaTags (item) {
  if (item && item.seoMetaTags) {
    delete item.seoMetaTags
  }
  if (typeof item === 'object') {
    Object.keys(item).forEach(key => {
      if (Array.isArray(item[key])) {
        item[key].forEach(removeSeoMetaTags)
      } else if (item[key] && typeof item[key] === 'object') {
        removeSeoMetaTags(item[key])
      }
    })
  }
  return item
}