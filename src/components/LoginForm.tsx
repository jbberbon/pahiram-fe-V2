"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UserState, useUserStore } from "@/hooks/useUser";

import { LoginSchema } from "@/schemas/Login";
import type { Login } from "@/schemas/Login";
import { loginAction } from "@/server/actions/login";
import { useRouter } from "next/navigation";
import { useAction } from "next-safe-action/hooks";
import { LoginResponse } from "@/types/LoginActionInterface";

export default function LoginForm() {
  const router = useRouter();
  const { execute, result, isExecuting } = useAction(loginAction);

  const form = useForm<Login>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const { setUserData } = useUserStore();
  // TODO: Add loading spinner

  useEffect(() => {
    if (result?.data?.userData) {
      setUserData(result.data.userData);
      console.log("Submit button: ", result.data.userData);
    }
  }, [result]);

  async function onSubmit() {
    // execute({
    //     email: "",
    //     password: "",
    //     remember_me: null
    // })
    await execute(form.getValues());

    router.refresh();
    form.reset(form.getValues());
  }

  console.log("Next safe Action: ", result.data?.userData);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>APC Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
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
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="remember"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Remember me for 7 days</FormLabel>
              </div>
            </FormItem>
          )}
        />
        {/* <FormError message={error} />
                <FormSuccess message={success} /> */}
        <Button
          type="submit"
          className="h-[40px] w-full bg-button text-gray-100"
          disabled={isExecuting}
        >
          {isExecuting ? "Loading..." : "Sign in"}
        </Button>
        <FormDescription className="text-center">
          Upon signing in you accept the terms and conditions.
        </FormDescription>
      </form>
    </Form>
  );
}
