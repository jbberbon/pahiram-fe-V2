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
            apcId: "123456",
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@apc.edu.ph",
            departmentCode: null, // example department code
            role: "BORROWER", // example role
            isAdmin: false,
        },
        apcsisToken: "dummy_apcis_token",
        pahiramToken: "dummy_pahiram_token",
    };

    if (!response) {
        return {error: "Invalid credentials!"};
    }

    const authCookie = JSON.stringify({
        user: response.user,
        isAuthenticated: 'true',
        apcisToken: response.apcsisToken,
        pahiramToken: response.pahiramToken,
    });

    cookies().set('auth', authCookie, {httpOnly: true, secure: false, maxAge: 60 * 60 * 24,});


    return {success: "Login success!", data: response};
}