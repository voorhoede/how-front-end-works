const dataDir = `src/static/data/`

module.exports = (dato, root, i18n) => {
  generateAlphabeticalIndex(dato, root, i18n);
  generateIndex(dato, root, i18n);
  generateLemmas(dato, root, i18n);
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
    lemmaColor: dato.siteInfo.lemmaColor.hex,
    lemmas: dato.lemmata.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
                        .map(lemma => {
                          return {
                            name: lemma.name,
                            slug: lemma.slug
                          }
                        }),
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
        lemmas: concept.lemmas.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
                              .map(lemma => {
                                return {
                                  color: dato.siteInfo.lemmaColor.hex,
                                  name: lemma.name,
                                  slug: lemma.slug
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

function generateLemmas(dato, root, i18n) {
  dato.lemmata.forEach(lemma => {
    root.createDataFile(`${dataDir}lemmas/${lemma.slug}.json`, 'json', {
      concepts: dato.concepts.filter(concept => {
        return concept.lemmas.some(conceptLemma => {
          return conceptLemma.id === lemma.id
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
      description: lemma.description,
      footer: dato.siteInfo.footer,
      headerColor: dato.siteInfo.headerColor.hex,
      image: lemma.image ? lemma.image.url() : '',
      name: lemma.name,
      relatedLemmas: lemma.relatedLemmas.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
                                        .map(relatedLemma => {
                                          return {
                                            color: dato.siteInfo.lemmaColor.hex,
                                            name: relatedLemma.name,
                                            slug: relatedLemma.slug,
                                          }
                                        }),
      seo: {
        title: lemma.seo.title + ' - ' + dato.siteInfo.seo.title,
        description: lemma.seo.description,
        url: lemma.slug,
        image: {
          height: lemma.seo.image ? lemma.seo.image.height : '',
          url: lemma.seo.image ? lemma.seo.image.url() : '',
          width: lemma.seo.image ? lemma.seo.image.width : ''
        }
      },
      slug: lemma.slug,
      title: dato.siteInfo.title
    });
  });
}
