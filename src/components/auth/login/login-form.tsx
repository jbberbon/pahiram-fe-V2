"use client";

import {useEffect, useState} from "react";

import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {useUserStore} from "@/hooks/useUser";

import type {FormSchemas} from "@/lib/form-schemas";
import {LoginSchema} from "@/lib/form-schemas";
import {loginUserAction} from "@/core/actions/authentication";
import {useRouter} from "next/navigation";
import {useAction} from "next-safe-action/hooks";
import {FormError} from "@/components/common/form-error";

export default function LoginForm() {
    const [error, setError] = useState<string[] | string | Object | undefined>("");

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
        const data = result?.data;
        const message = data?.message;
        const errors = data?.errors;
        const userData = data?.data?.user;
        const success = data?.success;

        if (!success && message) {
            if (errors) {
                const errorArray = Object.values(errors as Record<string, string>);
                setError(errorArray);
                return;
            }
            setError(message);
        }

        if (userData) {
            setUserData(userData);
            router.replace("/auth/login");
        }
    }, [result, router, setUserData, setError]);

    function onSubmit() {
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
                    disabled={isExecuting}
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
                    disabled={isExecuting}
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
                    disabled={isExecuting}
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
                {/*Container for the error and success messages*/}
                <div className="space-y-2">
                    {/*Maps the error if its an array then displays the form error*/}
                    {Array.isArray(error) && error.map((e: string, index: number) => (
                        <FormError message={e} key={index}/>
                    ))}

                    {/*Renders the form error if the error has value and is an array*/}
                    {typeof error === "string" && <FormError message={error}/>}

                </div>

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
