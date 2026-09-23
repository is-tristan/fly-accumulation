import { defineQuery } from "next-sanity"

const imageFields = /* groq */ `
  asset,
  hotspot,
  crop
`

export const workCarouselQuery = defineQuery(`
  *[_type == "work"] | order(orderRank) {
    _id,
    title,
    "slug": slug.current,
    description,
    categories[]->{
      _id,
      title,
      "slug": slug.current
    },
    video
  }
`)

export const featuredVideoQuery = defineQuery(`
  *[_type == "work"] | order(orderRank)[0] {
    _id,
    video
  }
`)

const workGridFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  "category": categories[0]->title,
  "image": gallery[0] {
    ${imageFields}
  },
  categories[]->{
    _id,
    title,
    "slug": slug.current
  }
`

export const workGridQuery = defineQuery(`
  *[_type == "work"] | order(orderRank)[0...6] {
    ${workGridFields}
  }
`)

export const workGridCountQuery = defineQuery(`
  count(*[_type == "work" && ($categoryId == "" || $categoryId in categories[]._ref)])
`)

export function workGridPageQuery(start, end) {
  return defineQuery(`
    *[_type == "work" && ($categoryId == "" || $categoryId in categories[]._ref)]
    | order(orderRank)[${start}...${end}] {
      ${workGridFields}
    }
  `)
}

export const workCategoriesQuery = defineQuery(`
  *[_type == "workCategory"] | order(title asc) {
    _id,
    "label": title,
    "slug": slug.current
  }
`)

export const workBySlugQuery = defineQuery(`
  *[_type == "work" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    categories[]->{
      _id,
      title,
      "slug": slug.current
    },
    video,
    "image": gallery[0] {
      ${imageFields}
    },
    gallery[]{
      _key,
      ${imageFields}
    }
  }
`)

export const teamCarouselQuery = defineQuery(`
  *[_type == "team"] | order(orderRank) {
    _id,
    name,
    position,
    image {
      ${imageFields}
    },
    email,
    "linkedIn": linkedin
  }
`)

export const testimonialCarouselQuery = defineQuery(`
  *[_type == "testimonial"] | order(orderRank)[0...8] {
    _id,
    title,
    position,
    companyLogo {
      ${imageFields}
    },
    invertLogo,
    content
  }
`)

export const talentGridQuery = defineQuery(`
  *[_type == "talent"] | order(orderRank) {
    _id,
    title,
    "slug": slug.current,
    location,
    "image": gallery[0] {
      ${imageFields}
    },
    contentFocus[0...3]->{
      _id,
      title,
      "slug": slug.current
    }
  }
`)

export const talentBySlugQuery = defineQuery(`
  *[_type == "talent" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    gallery[]{
      _key,
      ${imageFields}
    },
    video,
    audienceSize,
    location,
    contentFocus[]->{
      _id,
      title,
      "slug": slug.current
    },
    brandDeals[]->{
      _id,
      title,
      image {
        ${imageFields}
      },
      invertLogo
    },
    description,
    tiktokUrl,
    tiktokFollowerCount,
    instagramUrl,
    instagramFollowerCount
  }
`)

export const legalBySlugQuery = defineQuery(`
  *[_type == "legal" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    content,
    "description": array::join(string::split(pt::text(content), "")[0...160], "")
  }
`)

export const sitemapQuery = defineQuery(`
  {
    "work": *[_type == "work" && defined(slug.current)] | order(orderRank) {
      "slug": slug.current,
      _updatedAt
    },
    "talent": *[_type == "talent" && defined(slug.current)] | order(orderRank) {
      "slug": slug.current,
      _updatedAt
    },
    "legal": *[_type == "legal" && defined(slug.current)] | order(title asc) {
      "slug": slug.current,
      _updatedAt
    }
  }
`)
