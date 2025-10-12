import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "85bjrdjp",
  dataset: "production",
  apiVersion: "2025-10-09",
  useCdn: true,
});
