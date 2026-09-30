// Fonts
import localFont from "next/font/local"

// SEO
import { siteDescription, siteName, getSiteUrl } from "@/lib/seo"

const sharpSans = localFont({
  display: "swap",
  variable: "--font-sharp-sans",
  src: [
    {
      path: "../public/fonts/sharp-sans-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/sharp-sans-bold.woff2",
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
      path: "../public/fonts/tablet-gothic-condensed-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
})

const dmSans = localFont({
  display: "swap",
  variable: "--font-dm-sans",
  src: [
    {
      path: "../public/fonts/dm-sans-variable.woff2",
      weight: "900",
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

    <html lang="en" className={`${sharpSans.variable} ${reworkTextHeading.variable} ${tabletGothic.variable} ${dmSans.variable}`} >

      <body>

        {children}

      </body>

    </html>

  )

}
