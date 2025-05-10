import { z } from "zod";


export const loginSchema = z.object({
    emailPhone: z.string()
        .refine((value) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^\+?[1-9]\d{1,14}$/;
            return emailRegex.test(value) || phoneRegex.test(value)
        }, {message: "Must be a valid email or phone number"}),

    password: z.string()
        .min(8, {message: "Password must be at least 8 characters"})
})