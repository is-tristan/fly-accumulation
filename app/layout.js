// Fonts
import localFont from "next/font/local"

// SEO
import { siteDescription, siteName, getSiteUrl } from "@/lib/seo"

const reworkDisplay = localFont({
  display: "swap",
  variable: "--font-rework-display",
  src: [
    {
      path: "../public/fonts/rework-display-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/rework-display-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/rework-display-semi-bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/rework-display-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
})

const reworkTextHeading = localFont({
  display: "swap",
  variable: "--font-rework-text-heading",
  src: [
    {
      path: "../public/fonts/rework-text-heading-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
})

const tabletGothic = localFont({
  display: "swap",
  variable: "--font-tablet-gothic",
  src: [
    {
      path: "../public/fonts/tablet-gothic-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
})

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  openGraph: {
    type: "website",
    siteName,
    title: siteName,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
}

export default function RootLayout({ children }) {

  return (

    <html lang="en" className={`${reworkDisplay.variable} ${reworkTextHeading.variable} ${tabletGothic.variable}`} >

      <body>

        {children}

      </body>

    </html>

  )

}
