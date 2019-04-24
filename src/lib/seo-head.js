export default function (seo) {
  const { image } = seo
  return {
    title: seo.title,
    meta: [
      { hid: 'description', name: 'description', content: seo.description },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: `https://howfrontendworks.com/${seo.url}` },
      { hid: 'og:title', property: 'og:title', content: seo.title },
      { hid: 'og:description', property: 'og:description', content: seo.description },
      image.url && { hid: 'og:image', property: 'og:image', content: `${image.url}` },
      image.width && { hid: 'og:image:width', property: 'og:image:width', content: image.width },
      image.height && { hid: 'og:image:height', property: 'og:image:height', content: image.height },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@devoorhoede' },
    ].filter(Boolean),
    link: [
      { rel: 'canonical', href: `https://how-front-end-works.com/${seo.url}` },
    ]
  }
}
