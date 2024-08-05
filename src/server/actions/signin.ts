"use server";

import {LoginSchema} from "@/server/schemas";
import {z} from "zod";
import {cookies} from "next/headers";

export const signin = async (values: z.infer<typeof LoginSchema>) => {


    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return {error: "Invalid fields!"};
    }

    const {email, password, remember} = validatedFields.data;

    // Simulate a backend API response with dummy data
    const response = {
        user: {
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@example.com",
            department_code: "ITRO", // example department code
            role: "SUPERVISOR", // exa`mple role
            is_admin: true,
        },
        apcis_token: "dummy_apcis_token",
        pahiram_token: "dummy_pahiram_token",
    };

    if (!response) {
        return {error: "Invalid credentials!"};
    }

    if (response.user.department_code) {
        cookies().set('view', 'office', {secure: true});
    } else {
        cookies().set('view', 'borrow', {secure: true});
    }

    cookies().set('isAuthenticated', 'true', {secure: true});
    cookies().set("apcisToken", response.apcis_token, {secure: true});
    cookies().set("pahiramToken", response.pahiram_token, {secure: true});

    return {success: "Login success!", data: response};
}