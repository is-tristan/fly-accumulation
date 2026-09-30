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
      title: "Video",
      type: "file",
      description: "Upload a video file",
      options: {
        accept: "video/*",
      },
      fields: [
        defineField({
          name: "poster",
          title: "Poster",
          type: "image",
          description: "Image shown before the video plays",
          options: {
            hotspot: true,
          },
        }),
      ],
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
    defineField({
      name: "talent",
      title: "Talent",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "talent" }],
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
