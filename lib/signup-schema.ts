import { z } from "zod";


export const signupSchema = z.object({
    emailPhone: z.string()
        .refine((value) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^\+?[1-9]\d{1,14}$/;
            return emailRegex.test(value) || phoneRegex.test(value)
        }, {message: "Must be a valid email or phone number"}),

    category: z.enum(["Tenant", "Landlord", "Property manager", "Agent"], {
        required_error: "Please select a category",
    }),

    password: z.string()
        .min(8, {message: "Password must be at least 8 characters"})
        .regex(/A-Z/, {message: "Password must contain at least one uppercase letter"})
        .regex(/0-9/, {message: "Password must contain at least one number"}),
    
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });