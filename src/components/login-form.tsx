"use client";

import {useRouter} from "next/navigation";
import {Card} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Flex, Heading} from "@radix-ui/themes";
import {LayoutDashboard} from "lucide-react";
import {useState, useTransition} from "react";
import {LoginSchema} from "@/server/schemas"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {signin} from "@/server/actions/signin";
import {FormError} from "@/components/form-error";
import {FormSuccess} from "@/components/form-success";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {UserState, useUserStore} from "@/hooks/useUser";
import {useFirstMenuItem} from "@/lib/menuList";

export default function LoginForm() {

    const setAuthDataAndUserData = useUserStore((state: unknown) => (state as UserState).setAuthDataAndUserData);

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const router = useRouter();

    // TODO: Add loading spinner

    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        },
    });

    const firstMenuItem = useFirstMenuItem();

    function onSubmit(values: z.infer<typeof LoginSchema>) {
        setIsLoading(true);
        setError("");
        setSuccess("");
        console.log("Login form submitted")
        startTransition(() => {
            signin(values)
                .then((data) => {
                    if (data?.error) {
                        form.reset();

                        setError(data.error);
                    }

                    if (data?.success && data?.data) {
                        form.reset();

                        setSuccess(data.success);
                        setAuthDataAndUserData(data.data);
                        router.push(firstMenuItem || "/");
                    }

                })
                .catch(() => setError("Something went wrong!"));
        });
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-md md:max-w-3xl lg:max-w-4xl">
                <Card
                    className="flex flex-col md:flex-row rounded-lg shadow-lg md:h-auto lg:h-[600px] md:w-full">
                    {/* Image side */}
                    <div className="hidden md:block w-full h-48 md:w-1/2 md:h-auto">
                        <img
                            src="/login-image-ram.jpg"
                            alt="APC Logo"
                            className="object-cover w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                    </div>

                    {/* Form side */}
                    {/*TODO: Use shadcn ui form component and zod*/}
                    <div className="flex flex-col justify-center w-full p-8 md:p-12 md:w-1/2">
                        <Flex justify="center" align="center" direction="column" gap="3">
                            <Flex display="inline-flex" align="center" gap="1">
                                <LayoutDashboard className="fill-current w-8 h-8 text-[hsl(var(--primary))]"/>
                                <Heading trim="both" as="h1" size="8" weight="bold"
                                         className="text-[hsl(var(--primary))]">
                                    Pahiram
                                </Heading>
                            </Flex>
                            <p className="mb-6 text-sm">APC Equipment Lending System</p>
                        </Flex>
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
                                                <Input type="password"  {...field} />
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
                                <FormError message={error}/>
                                <FormSuccess message={success}/>
                                <Button type="submit" className="h-[40px] w-full bg-button text-gray-100">Sign
                                    in</Button>
                                <FormDescription className="text-center">
                                    Upon signing in you accept the terms and conditions.
                                </FormDescription>
                            </form>
                        </Form>
                        <div className="mt-8 text-center">
                            <p className="rt-r-weight-bold text-xs text-gray-500 dark:text-yellow-500">The Polarber
                                Group © 2023</p>
                            <Link href="#" className="text-xs text-blue-600 dark:text-gray-50" prefetch={false}>
                                Terms and Conditions
                            </Link>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}


