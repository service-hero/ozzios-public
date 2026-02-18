const SITE_NAME = 'OzziOS'
const SITE_URL = 'https://ozzios.com'
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.png`

export interface PageSEO {
  title: string
  description: string
  path: string
  ogImage?: string
  ogType?: 'website' | 'article'
  article?: {
    publishedTime?: string
    author?: string
  }
  noindex?: boolean
}

export function createPageHead(seo: PageSEO) {
  const fullTitle = `${seo.title} | ${SITE_NAME}`
  const url = `${SITE_URL}${seo.path}`
  const image = seo.ogImage || DEFAULT_OG_IMAGE
  const ogType = seo.ogType || 'website'

  const meta: Array<Record<string, string>> = [
    { title: fullTitle },
    { name: 'description', content: seo.description },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: seo.description },
    { property: 'og:type', content: ogType },
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    { property: 'og:site_name', content: SITE_NAME },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: seo.description },
    { name: 'twitter:image', content: image },
  ]

  if (ogType === 'article' && seo.article) {
    if (seo.article.publishedTime) {
      meta.push({ property: 'article:published_time', content: seo.article.publishedTime })
    }
    if (seo.article.author) {
      meta.push({ property: 'article:author', content: seo.article.author })
    }
  }

  if (seo.noindex) {
    meta.push({ name: 'robots', content: 'noindex, nofollow' })
  }

  return { meta }
}
