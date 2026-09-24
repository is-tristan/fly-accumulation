import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list"
import { defineArrayMember, defineField, defineType } from "sanity"
import { PlayIcon } from "@sanity/icons/Play"

export const work = (context) => defineType({
  name: "work",
  title: "Work",
  type: "document",
  icon: PlayIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "work", context }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "video",
      title: "YouTube URL",
      type: "url",
      description: "Paste a YouTube watch, share, or embed link",
      validation: (rule) =>
        rule.uri({
          scheme: ["http", "https"],
        }).custom((value) => {
          if (!value) {
            return true
          }

          const isYoutube = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i.test(value)

          return isYoutube || "Must be a valid YouTube URL"
        }),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "workCategory" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "featuredImage",
      subtitle: "description",
    },
  },
})
