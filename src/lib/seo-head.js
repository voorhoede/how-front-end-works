export default function (title = '', slug = '', description = '', image = '') {
  return {
    title: title,
    meta: [
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: `https://www.howfrontendworks.com/${slug}` },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:image', property: 'og:image', content: image },
      { hid: 'og:image:width', property: 'og:image:width', content: 805 },
      { hid: 'og:image:height', property: 'og:image:height', content: 450 },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@devoorhoede' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@devoorhoede' },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:description', name: 'twitter:description', content: description },
      { hid: 'twitter:image', name: 'twitter:image', content: image },
    ].filter(Boolean),
    link: [
      { rel: 'canonical', href: `https://www.howfrontendworks.com/${slug}` },
    ]
  }
}
