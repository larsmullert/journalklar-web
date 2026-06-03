interface Props {
  title: string
  seo_description: string
  lastModified: string
  slug: string
}

export default function ArticleSchema({ title, seo_description, lastModified, slug }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: seo_description,
    datePublished: lastModified,
    dateModified: lastModified,
    author: {
      '@type': 'Person',
      name: 'Lars Mullert Pedersen',
      jobTitle: 'Cand.psych.',
      alumniOf: 'Aalborg Universitet',
      url: 'https://journalklar.dk/om',
    },
    publisher: {
      '@type': 'Organization',
      name: 'JournalKlar',
      url: 'https://journalklar.dk',
    },
    url: `https://journalklar.dk/blog/${slug}`,
    inLanguage: 'da-DK',
    isPartOf: {
      '@type': 'Blog',
      name: 'JournalKlar — Faglige artikler',
      url: 'https://journalklar.dk/blog',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
