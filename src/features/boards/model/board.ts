import { z } from "zod";

export const boardScheme = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
});

export type Board = z.infer<typeof boardScheme>;
