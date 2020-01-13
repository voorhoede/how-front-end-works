const generatePapers = require('./src/lib/generate-papers')

const dataDir = `src/static/data/`

module.exports = (dato, root, i18n) => {
  generateAlphabeticalIndex(dato, root, i18n);
  generateIndex(dato, root, i18n);
  generateTopics(dato, root, i18n);
}

// Extract the Dropbox Paper ID from its URL.
const getPaperID = URL => URL ? URL.substring(URL.lastIndexOf('-') + 1) : null

function generateAlphabeticalIndex(dato, root, i18n) {
  root.createDataFile(`${dataDir}alphabetical-index.json`, 'json', {
    footer: dato.siteInfo.footer,
    headerButton: {
      label: dato.siteInfo.alphabeticalPageHeaderButton.label,
      url: dato.siteInfo.alphabeticalPageHeaderButton.url
    },
    headerColor: dato.siteInfo.headerColor.hex,
    headerImage: dato.siteInfo.seo.image.url(),
    introduction: dato.siteInfo.introduction,
    topicColor: dato.siteInfo.topicColor.hex,
    topics: dato.topics.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
                        .map(topic => {
                          return {
                            name: topic.name,
                            slug: topic.slug
                          }
                        }),
    seoImage: dato.siteInfo.seoImage.url(),
    title: dato.siteInfo.title
  });
}

function generateIndex(dato, root, i18n) {
  root.createDataFile(`${dataDir}index.json`, 'json', {
    concepts: dato.concepts.map(concept => {
      const paperID = getPaperID(concept.paperUrl)
      generatePapers(paperID)

      return {
        paperID,
        color: concept.color.hex,
        icon: concept.icon.url(),
        image: concept.image.url(),
        topics: concept.topics.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
                              .map(topic => {
                                return {
                                  color: dato.siteInfo.topicColor.hex,
                                  name: topic.name,
                                  slug: topic.slug
                                }
                              }),
        name: concept.name,
        slug: concept.slug
      }
    }),
    footer: dato.siteInfo.footer,
    headerButton: {
      label: dato.siteInfo.indexPageHeaderButton.label,
      url: dato.siteInfo.indexPageHeaderButton.url
    },
    headerColor: dato.siteInfo.headerColor.hex,
    headerImage: dato.siteInfo.headerImage.url(),
    introduction: dato.siteInfo.introduction,
    seoImage: dato.siteInfo.seoImage.url(),
    title: dato.siteInfo.title
  });
}

function generateTopics(dato, root, i18n) {
  dato.topics.forEach(topic => {
    const paperID = getPaperID(topic.paperUrl)
    generatePapers(paperID)

    root.createDataFile(`${dataDir}topics/${topic.slug}.json`, 'json', {
      paperID,
      concepts: dato.concepts.filter(concept => {
        return concept.topics.some(conceptTopic => {
          return conceptTopic.id === topic.id
        });
      }).sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        .map(relatedConcept => {
          return {
            color: relatedConcept.color.hex,
            icon: relatedConcept.icon.url(),
            name: relatedConcept.name,
            slug: relatedConcept.slug
          }
      }),
      footer: dato.siteInfo.footer,
      headerColor: dato.siteInfo.headerColor.hex,
      image: topic.image ? topic.image.url() : '',
      name: topic.name,
      relatedTopics: topic.relatedTopics.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
                                        .map(relatedTopic => {
                                          return {
                                            color: dato.siteInfo.topicColor.hex,
                                            name: relatedTopic.name,
                                            slug: relatedTopic.slug,
                                          }
                                        }),
      seoImage: dato.siteInfo.seoImage.url(),
      slug: topic.slug,
      title: dato.siteInfo.title
    });
  });
}
