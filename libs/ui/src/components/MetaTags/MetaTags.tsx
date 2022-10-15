import React from "react"

export interface MetaTagsProps {
  title: string
  description: string
  brandColor: string
  themeColor: string
  url: string
  image: string
  manifest: string
  icons: {
    appleTouchIcon: string
    largeIcon: string
    smallIcon: string
    maskIcon: string
  }
}

interface NameMeta {
  name: "title" | "description" | "msapplication-TileColor" | "theme-color"
  content: string
}

interface PropertyMeta {
  property:
    | "og:type"
    | "og:url"
    | "og:title"
    | "og:description"
    | "og:image"
    | "twitter:card"
    | "twitter:url"
    | "twitter:title"
    | "twitter:description"
    | "twitter:image"
  content: string
}

export type Meta = NameMeta | PropertyMeta

interface BasicLink {
  rel: "preconnect" | "stylesheet" | "manifest"
  href: string
}

interface IconLink {
  rel: "apple-touch-icon" | "icon" | "mask-icon"
  type?: "image/png"
  href: string
  sizes?: string
  color?: string
}

export type Link = BasicLink | IconLink

export const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  brandColor,
  themeColor,
  url,
  image,
  icons,
  manifest,
}) => {
  const metas: Meta[] = [
    {
      name: "description",
      content: description,
    },
    {
      name: "msapplication-TileColor",
      content: themeColor,
    },
    {
      name: "theme-color",
      content: themeColor,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: url,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:image",
      content: image,
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:url",
      content: url,
    },
    {
      property: "twitter:title",
      content: title,
    },
    {
      property: "twitter:description",
      content: description,
    },
    {
      property: "twitter:image",
      content: image,
    },
  ]
  const links: Link[] = [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: icons.appleTouchIcon,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: icons.largeIcon,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: icons.smallIcon,
    },
    {
      rel: "manifest",
      href: manifest,
    },
    {
      rel: "mask-icon",
      href: icons.maskIcon,
      color: brandColor,
    },
  ]
  return (
    <>
      {title && <title>{title}</title>}
      {links.map((props, index) => (
        <link key={`link-${index}`} {...props} />
      ))}
      {metas.map((props, index) => (
        <meta key={`meta-${index}`} {...props} />
      ))}
    </>
  )
}
