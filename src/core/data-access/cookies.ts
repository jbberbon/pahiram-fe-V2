"use server";
// TODO: Secure cookie, don't expose user data and tokens on cookie [security risk]
import {cookies} from "next/headers";
import {IAuthCookie, ILoginApiResponse, ILoginOutput, IUserFromCookie} from "@/lib/interfaces";

const auth = "auth";

/**
 * Retrieves the authentication cookie from the user's browser.
 *
 * @return {Promise<string | null>} - A Promise that resolves with the value of the authentication cookie,
 * or null if the cookie is not found.
 */
export const getParsedAuthCookie = async (): Promise<IAuthCookie> => {
    const cookieHeader = cookies().get("auth");
    return cookieHeader ? JSON.parse(cookieHeader.value) : null;
}

/**
 * Sets the authentication cookie with the provided login data.
 *
 * @param {ILoginApiResponse} loginOutput - The login data from the API response.
 * @return {Promise<void>} - A Promise that resolves when the cookie is successfully set.
 */
export const setAuthCookie = async (loginOutput: ILoginOutput): Promise<boolean> => {
    const authCookie = JSON.stringify({
        ...loginOutput?.data,
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
 * @return {Promise<IUserFromCookie | null>} The user object from the auth cookie, or null if the cookie is not present.
 */
export const getUserFromAuthCookie = async (): Promise<IUserFromCookie | null> => {
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