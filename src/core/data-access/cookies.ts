"use server";

import {cookies} from "next/headers";
import {AuthCookie, LoginApiResponse, LoginOutput, UserFromCookie} from "@/lib/interfaces";

const auth = "auth";

/**
 * Retrieves the authentication cookie from the user's browser.
 *
 * @return {Promise<string | null>} - A Promise that resolves with the value of the authentication cookie,
 * or null if the cookie is not found.
 */
export const getParsedAuthCookie = async (): Promise<AuthCookie | undefined> => {
    const cookieHeader = cookies().get("auth");
    return cookieHeader ? JSON.parse(cookieHeader.value) : null;
}

/**
 * Sets the authentication cookie with the provided login data.
 *
 * @param {LoginApiResponse} loginOutput - The login data from the API response.
 * @return {Promise<void>} - A Promise that resolves when the cookie is successfully set.
 */
export const setAuthCookie = async (loginOutput: LoginOutput): Promise<boolean> => {
    const authCookie = JSON.stringify({
        ...loginOutput?.data?.user,
        isAuthenticated: "true",
    });
    const isAuthCookieSet = cookies().set("auth", authCookie, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 24,
    });
    return !!isAuthCookieSet;
}

/**
 * Function to get the user object from the auth cookie.
 *
 * @return {Promise<UserFromCookie | null>} The user object from the auth cookie, or null if the cookie is not present.
 */
export const getUserFromAuthCookie = async (): Promise<UserFromCookie | null> => {
    const cookie = cookies().get(auth);
    return cookie ? JSON.parse(cookie.value).user : null;
}

/**
 * Function to delete the auth cookie.
 *
 * @return {Promise<void>} Promise that resolves when the cookie is deleted.
 */
export const deleteAuthCookie = async (): Promise<boolean> => {
    const isDeleted = cookies().delete(auth);
    return !!isDeleted;
};