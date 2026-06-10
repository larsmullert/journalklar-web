import { getAllArticles } from '@/lib/blog'
import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/sections/Nav'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Faglige artikler',
  description: 'Artikler om journalføring, lovkrav og AI til privatpraktiserende psykologer i Danmark.',
  alternates: {
    canonical: 'https://www.journalklar.dk/blog',
  },
  openGraph: {
    title: 'Faglige artikler · JournalKlar',
    description: 'Artikler om journalføring, lovkrav og AI til privatpraktiserende psykologer i Danmark.',
    url: 'https://www.journalklar.dk/blog',
    type: 'website',
  },
}

export default function BlogPage() {
  const articles = getAllArticles()

  return (
    <>
      <Nav />
      <main style={{ backgroundColor: '#F7F4EF', minHeight: '100vh' }}>
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '6rem 1.5rem 8rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-source-sans), system-ui, sans-serif',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#1D3A2F',
              marginBottom: '2rem',
            }}
          >
            Faglige artikler
          </p>

          <h1 style={{ marginBottom: '3rem' }}>Viden om journalføring og AI</h1>

          <div style={{ borderTop: '1px solid #E8E4DF' }}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                style={{
                  display: 'block',
                  borderBottom: '1px solid #E8E4DF',
                  padding: '2rem 0',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-source-sans), system-ui, sans-serif',
                    fontSize: 13,
                    fontWeight: 300,
                    color: '#6B6860',
                    marginBottom: '0.5rem',
                  }}
                >
                  {article.dato} · {article.laese_tid}
                </p>
                <h2
                  style={{
                    fontFamily: 'var(--font-source-serif), Georgia, serif',
                    fontWeight: 400,
                    fontSize: 'clamp(19px, 2vw, 24px)',
                    lineHeight: 1.3,
                    letterSpacing: '-0.015em',
                    color: '#1D3A2F',
                    marginBottom: '0.5rem',
                  }}
                >
                  {article.title}
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-source-sans), system-ui, sans-serif',
                    fontSize: 15,
                    fontWeight: 300,
                    color: '#505050',
                    marginBottom: 0,
                  }}
                >
                  {article.seo_description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
