import { defineField, defineType } from "sanity"
import { TagIcon } from "@sanity/icons/Tag"

export const talentBrandDeal = defineType({
  name: "talentBrandDeal",
  title: "Brand Deal",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Upload a black logo only",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "invertLogo",
      title: "Invert Logo",
      type: "boolean",
      description: "If your logo has a background, disable this option",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
})
