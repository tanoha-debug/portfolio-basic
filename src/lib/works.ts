import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type GalleryItem = {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

export type WorkMeta = {
  slug: string
  title: string
  client: string
  category: string
  thumbnail: string
  mainVisual: string
  summary: string
  url: string
  role: string
  purpose: string
  target: string
  publishedAt: string
  order: number
  gallery: GalleryItem[]
}

export type Work = WorkMeta & {
  content: string
}

const worksDir = path.join(process.cwd(), 'src/content/works')

function readWork(slug: string): Work {
  const filePath = path.join(worksDir, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title as string,
    client: data.client as string,
    category: data.category as string,
    thumbnail: data.thumbnail as string,
    mainVisual: data.mainVisual as string,
    summary: data.summary as string,
    url: data.url as string,
    role: data.role as string,
    purpose: data.purpose as string,
    target: data.target as string,
    publishedAt: data.publishedAt as string,
    order: (data.order as number) ?? 999,
    gallery: (data.gallery as GalleryItem[] | undefined) ?? [],
    content,
  }
}

export function getAllWorks(): WorkMeta[] {
  const files = fs.readdirSync(worksDir).filter((f) => f.endsWith('.mdx'))
  const works = files.map((f) => {
    const full = readWork(f.replace('.mdx', ''))
    const { content, ...meta } = full
    void content
    return meta
  })
  return works.sort((a, b) => a.order - b.order)
}

export function getWorkBySlug(slug: string): Work {
  return readWork(slug)
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(worksDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''))
}
