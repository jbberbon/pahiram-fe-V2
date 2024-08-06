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
            role: "SUPERVISOR", // example role
            is_admin: true,
        },
        apcis_token: "dummy_apcis_token",
        pahiram_token: "dummy_pahiram_token",
    };

    if (!response) {
        return {error: "Invalid credentials!"};
    }

    const authCookie = JSON.stringify({
        user: response.user,
        isAuthenticated: 'true',
        apcisToken: response.apcis_token,
        pahiramToken: response.pahiram_token,
    });

    cookies().set('auth', authCookie, {httpOnly: true, secure: false, maxAge: 60 * 60 * 24,});


    return {success: "Login success!", data: response};
}