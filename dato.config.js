const dataDir = `src/static/data/`

module.exports = (dato, root, i18n) => {
  generateAlphabeticalIndex(dato, root, i18n);
  generateIndex(dato, root, i18n);
  generateTopics(dato, root, i18n);
}

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
    seo: {
      title: dato.siteInfo.seo.title,
      description: dato.siteInfo.seo.description,
      url: 'alphabetical-index',
      image: {
        height: dato.siteInfo.seo.image ? dato.siteInfo.seo.image.height : '',
        url: dato.siteInfo.seo.image ? dato.siteInfo.seo.image.url() : '',
        width: dato.siteInfo.seo.image ? dato.siteInfo.seo.image.width : ''
      }
    },
    title: dato.siteInfo.title
  });
}

function generateIndex(dato, root, i18n) {
  root.createDataFile(`${dataDir}index.json`, 'json', {
    concepts: dato.concepts.map(concept => {
      return {
        color: concept.color.hex,
        description: concept.description,
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
    seo: {
      title: dato.siteInfo.seo.title,
      description: dato.siteInfo.seo.description,
      url: '',
      image: {
        height: dato.siteInfo.seo.image ? dato.siteInfo.seo.image.height : '',
        url: dato.siteInfo.seo.image ? dato.siteInfo.seo.image.url() : '',
        width: dato.siteInfo.seo.image ? dato.siteInfo.seo.image.width : ''
      }
    },
    title: dato.siteInfo.title
  });
}

function generateTopics(dato, root, i18n) {
  dato.topics.forEach(topic => {
    root.createDataFile(`${dataDir}topics/${topic.slug}.json`, 'json', {
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
      description: topic.description,
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
      seo: {
        title: topic.seo.title + ' - ' + dato.siteInfo.seo.title,
        description: topic.seo.description,
        url: topic.slug,
        image: {
          height: topic.seo.image ? topic.seo.image.height : '',
          url: topic.seo.image ? topic.seo.image.url() : '',
          width: topic.seo.image ? topic.seo.image.width : ''
        }
      },
      slug: topic.slug,
      title: dato.siteInfo.title
    });
  });
}
