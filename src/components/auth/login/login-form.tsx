"use client";

import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {useUserStore} from "@/hooks/useUser";

import type {FormSchemas} from "@/lib/form-schemas";
import {LoginSchema} from "@/lib/form-schemas";
import {loginUserAction} from "@/core/actions/authentication";
import {useRouter} from "next/navigation";
import {useAction} from "next-safe-action/hooks";

export default function LoginForm() {
    const {execute, result, isExecuting} = useAction(loginUserAction);

    const router = useRouter();

    const form = useForm<FormSchemas>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        },
    });

    const {setUserData} = useUserStore();
    // TODO: Add loading spinner

    useEffect(() => {
        if (result?.data && "userData" in result.data) {
            setUserData(result.data.userData);
            router.replace("/auth/login");
        }
    }, [result]);

    async function onSubmit() {
        // execute({
        //     email: "",
        //     password: "",
        //     remember_me: null
        // })
        execute(form.getValues());
        form.reset(form.getValues());
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>APC Email</FormLabel>
                            <FormControl>
                                <Input type="email" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="remember"
                    render={({field}) => (
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
