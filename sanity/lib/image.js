import { createImageUrlBuilder } from "@sanity/image-url"

import { dataset, projectId } from "@/sanity/env"

const builder = createImageUrlBuilder({ projectId, dataset })

export function urlFor(source) {
  return builder.image(source)
}

export const sanityImagePresets = {
  teamCard: {
    width: 576,
    aspectRatio: 3 / 4,
  },
  companyLogo: {
    width: 512,
    fit: "max",
  },
  workGrid: {
    width: 1536,
    aspectRatio: 1,
  },
  talentGrid: {
    width: 1152,
    aspectRatio: 3 / 4,
  },
  talentGallery: {
    width: 1152,
    aspectRatio: 3 / 4,
  },
  talentGalleryThumb: {
    width: 256,
    aspectRatio: 1,
  },
  workGallery: {
    width: 1920,
    aspectRatio: 16 / 9,
  },
  openGraph: {
    width: 1200,
    aspectRatio: 1200 / 630,
  },
}

export function getSanityImageUrl(source, preset) {
  if (!source) {
    return null
  }

  if (typeof source === "string") {
    return source
  }

  if (!source.asset) {
    return null
  }

  const config = sanityImagePresets[preset]

  if (!config) {
    return urlFor(source).auto("format").url()
  }

  let image = urlFor(source).width(config.width).auto("format")

  if (config.aspectRatio) {
    const height = Math.round(config.width / config.aspectRatio)
    image = image.height(height).fit(config.fit || "crop")
  } else if (config.fit) {
    image = image.fit(config.fit)
  }

  return image.url()
}
