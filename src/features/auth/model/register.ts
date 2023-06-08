import { z } from "zod";

export const registerFormScheme = z.object({
  email: z.string().email("이메일 형식이어야 합니다."),
  password: z.string().min(8, "8자 이상이어야 합니다."),
  username: z.string().nonempty("양식이 비어있습니다."),
});

export type RegisterFormType = z.infer<typeof registerFormScheme>;
