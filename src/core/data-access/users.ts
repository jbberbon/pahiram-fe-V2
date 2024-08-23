import {LoginInput, LoginOutput} from "@/lib/interfaces";
import {setAuthCookie} from "@/core/data-access/cookies";

const apiUrl = process.env.PAH_BACKEND;

export const getUserByEmail = async (email: string) => {
//  TODO: Call the get user by email api and pass the email
}

export const logoutUser = async () => {
//  TODO: Call the logout api and pass the tokens
}

/**
 * Logs in a user with the given credentials.
 * @param input The input from the user containing the email, password and remember flag.
 * @returns A Promise that resolves when the user is logged in successfully.
 * @throws An error if there is an issue with the login process.
 */
export const loginUser = async (input: LoginInput): Promise<LoginOutput> => {
    const {email, password, remember} = input;
    const loginApi = apiUrl + "/login";
    try {
        const response = await fetch(loginApi, {
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
            const errorMessage = errorData.message ?? "Unknown error";

            if (errorData.errors) {
                return {success: false, message: errorData.errors};
            }

            return {success: false, message: errorMessage};
        }

        // Parse the JSON body
        const loginApiResponseJson = await response.json();

        // Handle the successful response here
        const isSetSuccessful = await setAuthCookie(loginApiResponseJson);

        if (!isSetSuccessful) {
            return {
                success: false,
                message: "There was an error on our end. Please try again later. "
            }
        }

        return {
            success: true,
            userData: {...loginApiResponseJson?.data?.user},
            message: "User logged in successfully! 🎉",
        };

    } catch
        (error) {
        console.error(error);
        return {
            success: false,
            message: "Unable to connect to server. "
        };
    }

}