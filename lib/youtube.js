export function getYoutubeId(url) {

  if (!url || typeof url !== "string") {
    return null
  }

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/shorts\/|youtu\.be\/)([A-Za-z0-9_-]{11})/,
    /[?&]v=([A-Za-z0-9_-]{11})/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)

    if (match?.[1]) {
      return match[1]
    }
  }

  return null

}

export function getYoutubeEmbedUrl(url, {
  autoplay = false,
  mute = false,
  loop = false,
  controls = true,
} = {}) {

  const id = getYoutubeId(url)

  if (!id) {
    return null
  }

  const params = new URLSearchParams({
    playsinline: "1",
    rel: "0",
    modestbranding: "1",
    controls: controls ? "1" : "0",
  })

  if (autoplay) {
    params.set("autoplay", "1")
  }

  if (mute) {
    params.set("mute", "1")
  }

  if (loop) {
    params.set("loop", "1")
    params.set("playlist", id)
  }

  return `https://www.youtube.com/embed/${id}?${params.toString()}`

}
