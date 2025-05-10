/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { signupSchema } from "@/lib/signup-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { z } from "zod";
import PasswordInput from "./common/PasswordInput";

type SignFormValues = z.infer<typeof signupSchema>

const SignupForm = () => {
  const form = useForm<SignFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      emailPhone: "",
      category: undefined,
      password: "",
      confirmPassword: "",
    }
  })

  const onSubmit = (data: SignFormValues) => {
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
          render={({ field }: {field: ControllerRenderProps<any, string>}) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput field={field} placeholder="Enter your password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField 
          control={form.control}
          name="confirmPassword"
          render={({ field }: {field: ControllerRenderProps<any, string>}) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
               <PasswordInput field={field} placeholder="Confirm your password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField 
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select {...field} defaultValue={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tenant">Tenant</SelectItem>
                    <SelectItem value="landlord">Landlord</SelectItem>
                    <SelectItem value="property-manager">Property Manager</SelectItem>
                    <SelectItem value="agent">Agent</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-blue-950 hover:bg-blue-900 cursor-pointer transition duration-300">
          Sign Up
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
