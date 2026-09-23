import { client } from "@/sanity/lib/client"
import { sitemapQuery } from "@/sanity/lib/queries"
import { getSiteUrl } from "@/lib/seo"

const staticRoutes = [
  "/",
  "/work",
  "/contact",
  "/company",
  "/company/about",
  "/company/team",
  "/legal",
]

export default async function sitemap() {
  const siteUrl = getSiteUrl()

  const data = await client.fetch(sitemapQuery, {}, {
    next: { revalidate: 3600 },
  }).catch(() => null)

  const staticEntries = staticRoutes.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }))

  const workEntries = (data?.work ?? []).map((item) => ({
    url: new URL(`/work/${item.slug}`, siteUrl).toString(),
    lastModified: item._updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const talentEntries = (data?.talent ?? []).map((item) => ({
    url: new URL(`/talent/${item.slug}`, siteUrl).toString(),
    lastModified: item._updatedAt,
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  const legalEntries = (data?.legal ?? []).map((item) => ({
    url: new URL(`/legal/${item.slug}`, siteUrl).toString(),
    lastModified: item._updatedAt,
    changeFrequency: "yearly",
    priority: 0.3,
  }))

  return [
    ...staticEntries,
    ...workEntries,
    ...talentEntries,
    ...legalEntries,
  ]
}
