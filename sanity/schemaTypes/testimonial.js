import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list"
import { defineField, defineType } from "sanity"
import { CommentIcon } from "@sanity/icons/Comment"

export const testimonial = (context) => defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: CommentIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "testimonial", context }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
    }),
    defineField({
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
      description: "Upload a black logo only",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "invertLogo",
      title: "Invert Logo",
      type: "boolean",
      description: "If your logo has a background, disable this option",
      initialValue: true,
    }),
    defineField({
      name: "content",
      title: "Testimonial Content",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "position",
      media: "companyLogo",
    },
  },
})
