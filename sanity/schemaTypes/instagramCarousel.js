import { ImagesIcon } from "@sanity/icons/Images"
import { defineArrayMember, defineField, defineType } from "sanity"

export const instagramCarousel = defineType({
  name: "instagramCarousel",
  title: "Instagram Carousel",
  type: "document",
  icon: ImagesIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative Text",
              type: "string",
              validation: (rule) => rule.required().warning("Alt text is important for accessibility"),
            }),
          ],
        }),
      ],
      options: {
        layout: "grid",
      },
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0",
    },
    prepare({ title, media }) {
      return {
        title: title || "Instagram Carousel",
        subtitle: "Instagram Carousel",
        media: media ?? ImagesIcon,
      }
    },
  },
})
