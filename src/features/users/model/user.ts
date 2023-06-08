import { z } from "zod";

export const userScheme = z.object({
  username: z.string(),
  email: z.string().email(),
  id: z.number(),
});

export type User = z.infer<typeof userScheme>;
