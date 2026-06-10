import { getAllArticles, getArticleBySlug } from '@/lib/blog'
import type { Metadata } from 'next'
import ArticleSchema from '@/components/blog/ArticleSchema'
import AuthorBox from '@/components/blog/AuthorBox'
import Nav from '@/components/sections/Nav'
import Footer from '@/components/sections/Footer'

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  const url = `https://www.journalklar.dk/blog/${slug}`

  return {
    title: article.title,
    description: article.seo_description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.seo_description,
      url,
      type: 'article',
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  // Split at "## Kilder" — AuthorBox renders between brødtekst and kildeafsnit
  const sourcesMatch = article.contentHtml.match(/<h2[^>]*>\s*Kilder\s*<\/h2>/i)
  const splitIndex = sourcesMatch
    ? article.contentHtml.indexOf(sourcesMatch[0])
    : -1
  const mainHtml =
    splitIndex >= 0 ? article.contentHtml.slice(0, splitIndex) : article.contentHtml
  const sourcesHtml = splitIndex >= 0 ? article.contentHtml.slice(splitIndex) : null

  return (
    <>
      <Nav />
      <main style={{ backgroundColor: '#F7F4EF', minHeight: '100vh' }}>
        <ArticleSchema
          title={article.title}
          seo_description={article.seo_description}
          lastModified={article.lastModified}
          slug={slug}
        />

        <article
          style={{
            maxWidth: 680,
            margin: '0 auto',
            padding: '4rem 1.5rem 8rem',
          }}
        >
          {/* HEADER */}
          <header style={{ marginBottom: '3rem' }}>
            <p
              style={{
                fontFamily: 'var(--font-source-sans), system-ui, sans-serif',
                fontSize: 13,
                fontWeight: 300,
                color: '#6B6860',
                marginBottom: '1.25rem',
              }}
            >
              {article.dato} · {article.laese_tid}
            </p>
            <h1>{article.title}</h1>
          </header>

          {/* BRØDTEKST */}
          <div
            className="article-prose"
            dangerouslySetInnerHTML={{ __html: mainHtml }}
          />

          {/* FORFATTERBOX */}
          <AuthorBox />

          {/* KILDEAFSNIT */}
          {sourcesHtml && (
            <div
              className="article-prose article-sources"
              dangerouslySetInnerHTML={{ __html: sourcesHtml }}
            />
          )}

          {/* AI-TRANSPARENSLINJE */}
          <p
            style={{
              fontFamily: 'var(--font-source-sans), system-ui, sans-serif',
              fontSize: 14,
              fontStyle: 'italic',
              fontWeight: 300,
              color: '#6B6860',
              borderTop: '1px solid #E8E4DF',
              paddingTop: '1.5rem',
              marginTop: '2rem',
            }}
          >
            Denne artikel er skrevet i samarbejde med Claude (Anthropic). Faglig
            vurdering, kildevalg og endelig godkendelse er foretaget af Lars
            Mullert Pedersen.
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}
