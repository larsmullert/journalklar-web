import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const articlesDir = path.join(process.cwd(), 'content', 'blog')

const MONTH_MAP: Record<string, string> = {
  januar: '01', februar: '02', marts: '03', april: '04',
  maj: '05', juni: '06', juli: '07', august: '08',
  september: '09', oktober: '10', november: '11', december: '12',
}

function datoToIso(dato: string): string {
  const [monthDa, year] = dato.toLowerCase().split(' ')
  return `${year ?? '2026'}-${MONTH_MAP[monthDa] ?? '01'}-01`
}

export interface ArticleMeta {
  slug: string
  title: string
  seo_description: string
  dato: string
  laese_tid: string
  lastModified: string
}

export interface Article extends ArticleMeta {
  contentHtml: string
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(articlesDir)) return []

  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith('.md'))

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      const fullPath = path.join(articlesDir, file)
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'))
      return {
        slug,
        title: (data.title as string) ?? '',
        seo_description: (data.seo_description as string) ?? '',
        dato: (data.dato as string) ?? '',
        laese_tid: (data.laese_tid as string) ?? '',
        lastModified: datoToIso((data.dato as string) ?? 'maj 2026'),
      }
    })
    .sort((a, b) => b.lastModified.localeCompare(a.lastModified))
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const fullPath = path.join(articlesDir, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processed = await remark().use(remarkHtml).process(content)
  const contentHtml = processed.toString()

  return {
    slug,
    title: (data.title as string) ?? '',
    seo_description: (data.seo_description as string) ?? '',
    dato: (data.dato as string) ?? '',
    laese_tid: (data.laese_tid as string) ?? '',
    lastModified: datoToIso((data.dato as string) ?? 'maj 2026'),
    contentHtml,
  }
}
