/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { profileSchema } from "@/lib/profile-schema";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import useApi from "./hook/request";
import { showToast } from "./toast";

type ProfileFormValues = z.infer<typeof profileSchema>;

const SettingsForm = () => {
  const userToken = localStorage.getItem("token");
  const { makeRequest } = useApi("/user/update", "PUT", {
    Authorization: `Bearer ${userToken}`,
  });
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      gender: undefined,
      dateOfBirth: "",
      ninNumber: "",
      maritalStatus: undefined,
      businessName: "",
      address: "",
      option: undefined,
      cac: undefined,
    },
  });

const onSubmit = async (data: ProfileFormValues) => {
  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("name", data.name);
  formData.append("phoneNumber", data.phoneNumber);
  formData.append("gender", data.gender ?? "");
  formData.append("dateOfBirth", data.dateOfBirth);
  formData.append("ninNumber", data.ninNumber);
  formData.append("maritalStatus", data.maritalStatus ?? "");
  formData.append("businessName", data.businessName);
  formData.append("address", data.address);
  formData.append("option", data.option ?? "");

  if (data.cac) {
    formData.append("cac", data.cac);
  }

  const [res, status] = await makeRequest(formData);

  if (status === 200) {
    showToast("Profile update successful!", true, { position: "top-right" });
    form.reset();
  } else {
    const message =
      (res as any)?.message || "Profile update failed. Please try again.";
    showToast(message, false, { position: "top-right" });
  }
};

  return (
    <Card className="max-w-7xl mt-10 shadow-none border-none">
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="phoneNumber"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="dateOfBirth"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="gender"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="maritalStatus"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marital Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Single">Single</SelectItem>
                      <SelectItem value="Married">Married</SelectItem>
                      <SelectItem value="Divorced">Divorced</SelectItem>
                      <SelectItem value="Widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="option"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select One</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Landlord or Property Manager" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Landlord">Landlord</SelectItem>
                      <SelectItem value="Property Manager">
                        Property Manager
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="ninNumber"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NIN</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="businessName"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel>Business Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="address"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea rows={2} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="cac"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-1 md:col-span-2">
                  <FormLabel>Upload CAC Documents</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf,.png,.jpg,.jpeg,.doc"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                    />
                  </FormControl>
                  <p className="text-sm text-muted-foreground mt-1">
                    Accepted formats: .pdf, .png, .jpg, .jpeg, .doc
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-1 md:col-span-2 flex justify-end gap-4">
              <Button variant="outline" type="button">
                Discard
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SettingsForm;
