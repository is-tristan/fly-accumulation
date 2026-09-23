import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list"
import { defineArrayMember, defineField, defineType } from "sanity"
import { UsersIcon } from "@sanity/icons/Users"

export const talent = (context) => defineType({
  name: "talent",
  title: "Talent",
  type: "document",
  icon: UsersIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "talent", context }),
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
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
      options: {
        layout: "grid",
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
      name: "audienceSize",
      title: "Audience Size",
      type: "string",
      description: "e.g. 1.2M",
    }),
    defineField({
      name: "contentFocus",
      title: "Content Focus",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "talentContentFocus" }],
        }),
      ],
    }),
    defineField({
      name: "brandDeals",
      title: "Brand Deals",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "talentBrandDeal" }],
        }),
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "tiktokUrl",
      title: "TikTok Link",
      type: "url",
      validation: (rule) =>
        rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "tiktokFollowerCount",
      title: "TikTok Follower Count",
      type: "string",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram Link",
      type: "url",
      validation: (rule) =>
        rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "instagramFollowerCount",
      title: "Instagram Follower Count",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "audienceSize",
      media: "gallery.0",
    },
  },
})
