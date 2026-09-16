import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seoContent, NOT_FOUND_SEO } from '../data/seoContent'
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../lib/seo'

function setMetaByName(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setMetaByProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setCanonical(href) {
  let tag = document.querySelector('link[rel="canonical"]')
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', 'canonical')
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

/**
 * Route-driven head tags. The site is a client-rendered SPA with no
 * per-route SSR, so this is what keeps title/description/canonical/OG
 * in sync with whatever route is actually mounted.
 */
export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const key = pathname.replace(/^\/+/, '').replace(/\/+$/, '')
    const entry = seoContent[key] || (key ? NOT_FOUND_SEO : seoContent['/'])
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname.replace(/\/+$/, '')}`

    document.title = entry.title
    setMetaByName('description', entry.description)
    setCanonical(canonicalUrl)

    setMetaByProperty('og:type', 'website')
    setMetaByProperty('og:site_name', SITE_NAME)
    setMetaByProperty('og:title', entry.title)
    setMetaByProperty('og:description', entry.description)
    setMetaByProperty('og:url', canonicalUrl)
    setMetaByProperty('og:image', entry.image || DEFAULT_OG_IMAGE)

    setMetaByName('twitter:card', 'summary_large_image')
    setMetaByName('twitter:title', entry.title)
    setMetaByName('twitter:description', entry.description)
    setMetaByName('twitter:image', entry.image || DEFAULT_OG_IMAGE)
  }, [pathname])

  return null
}
