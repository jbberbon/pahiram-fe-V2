import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .refine((email) => email.endsWith("apc.edu.ph"), {
      message: "Email must end with @apc.edu.ph",
    }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  remember: z.boolean().optional(),
});

export type Login = z.infer<typeof LoginSchema>;
