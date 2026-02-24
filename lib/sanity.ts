import { createClient } from "@sanity/client"

export const client = createClient({
  projectId: "lytob0s2",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
})
