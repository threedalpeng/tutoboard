import { z } from "zod";

export const postScheme = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
  arthor: z.string(),
});

export type Post = z.infer<typeof postScheme>;
