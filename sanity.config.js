"use client"

import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

import { apiVersion, dataset, projectId } from "./sanity/env"
import { schemaTypes } from "./sanity/schemaTypes"
import { structure } from "./sanity/structure"

export default defineConfig({
  name: "fly-accumulation",
  title: "Fly Accumulation",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter((templateItem) => templateItem.templateId !== "instagramCarousel")
      }

      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === "instagramCarousel") {
        return prev.filter(({ action }) => action !== "duplicate" && action !== "delete")
      }

      return prev
    },
  },
})
