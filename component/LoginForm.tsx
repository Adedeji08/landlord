"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { loginSchema } from '@/lib/login-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import PasswordInput from './common/PasswordInput'
import { Button } from '@/components/ui/button'


type LoginFormValues = z.infer<typeof loginSchema>

const LoginForm = () => {
    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            emailPhone: "",
            password: "",
        }
    })

    const onSubmit = (data: LoginFormValues) => {
        console.log("Form submitted", data);
    
    }

  return (
   <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-90">
            <FormField 
                control={form.control}
                name="emailPhone"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email or Phone Number</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter your email address or phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField 
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <PasswordInput field={field} placeholder="Enter your password" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <a href='#' className="text-blue-950 font-medium text-[15px] hover:underline">Forget Password?</a>

            <Button type="submit" className="w-full mt-5 bg-blue-950 hover:bg-blue-900 cursor-pointer transition duration-300">
                Sign In
            </Button>
        </form>
   </Form>
  )
}

export default LoginForm
