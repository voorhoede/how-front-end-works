const dataDir = `src/static/data/`

module.exports = (dato, root, i18n) => {
  generateIndex(dato, root, i18n);
  generateLemmas(dato, root, i18n);
}

function generateIndex(dato, root, i18n) {
  root.createDataFile(`${dataDir}index.json`, 'json', {
    concepts: dato.concepts.map(concept => {
      return {
        color: concept.color.hex,
        description: concept.description,
        icon: concept.icon.url(),
        image: concept.image.url(),
        lemmas: concept.lemmas.map(lemma => {
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
    headerColor: dato.siteInfo.headerColor.hex,
    introduction: dato.siteInfo.introduction,
    footer: dato.siteInfo.footer,
    seo: {
      title: dato.siteInfo.seo.title,
      description: dato.siteInfo.seo.description,
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
    root.createDataFile(`${dataDir}${lemma.slug}.json`, 'json', {
      concepts: dato.concepts.filter(concept => {
        return concept.lemmas.some(conceptLemma => {
          return conceptLemma.id === lemma.id
        });
      }).map(relatedConcept => {
        return {
          color: relatedConcept.color.hex,
          icon: relatedConcept.icon.url(),
          name: relatedConcept.name
        }
      }),
      description: lemma.description,
      image: lemma.image ? lemma.image.url() : '',
      name: lemma.name,
      relatedLemmas: lemma.relatedLemmas.map(relatedLemma => {
        return {
          color: dato.siteInfo.lemmaColor.hex,
          name: relatedLemma.name,
          slug: relatedLemma.slug,
        }
      }),
      seo: {
        title: lemma.seo.title,
        description: lemma.seo.description,
        image: {
          height: lemma.seo.image ? lemma.seo.image.height : '',
          url: lemma.seo.image ? lemma.seo.image.url() : '',
          width: lemma.seo.image ? lemma.seo.image.width : ''
        }
      },
      slug: lemma.slug
    });
  });
}