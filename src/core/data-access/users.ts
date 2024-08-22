import {LoginInput} from "@/lib/interfaces";
import {cookies} from "next/headers";
import {deleteAuthCookie, setAuthCookie} from "@/core/data-access/cookies";

export const logoutUser = async () => {
   return await deleteAuthCookie();
}

/**
 * Logs in a user with the given credentials.
 * @param input The input from the user containing the email, password and remember flag.
 * @returns A Promise that resolves when the user is logged in successfully.
 * @throws An error if there is an issue with the login process.
 */
export const loginUser = async (input: LoginInput) => {
    const loginUrl = process.env.PAH_BACKEND + "/login";
    const {email, password, remember} = input;
    try {
        const response = await fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                remember_me: remember,
            }),
        });

        if (response.status !== 200) {
            const errorData = await response.json();
            return {success: false, message: errorData.message};
        }

        // Parse the JSON body
        const loginApiResponseJson = await response.json();

        // Handle the successful response here
        await setAuthCookie(loginApiResponseJson);

        return {
            success: true,
            userData: {...loginApiResponseJson?.data?.user},
            message: "User logged in successfully! 🎉",
        };

    } catch (error) {
        return {
            success: false,
            message: "Unable to connect to server.",
        };
    }

}