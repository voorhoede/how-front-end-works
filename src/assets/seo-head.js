export default function seoHead (seo) {
  const { image } = seo
  return {
    title: seo.title,
    meta: [
      { hid: 'description', name: 'description', content: seo.description },
      { hid: 'og:title', name: 'og:title', content: seo.title },
      { hid: 'og:description', name: 'og:description', content: seo.description },
      image && { hid: 'og:image', name: 'og:image', content: `${image.url}?auto=format&fm=jpg&auto=quality` },
      image && { hid: 'og:image:width', name: 'og:image:width', content: image.width },
      image && { hid: 'og:image:height', name: 'og:image:height', content: image.height },
    ].filter(Boolean)
  }
}
