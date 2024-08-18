"use server";

import { flattenValidationErrors } from "next-safe-action";
import { cookies } from "next/headers";
import { LoginResponse } from "@/types/LoginActionInterface";
import { LoginSchema } from "@/schemas/Login";
import { actionClient } from "@/lib/safe-action";

const loginUrl = process.env.PAH_BACKEND + "/login";

export const loginAction = actionClient
  .schema(LoginSchema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(
    async ({
      parsedInput: { email, password, remember },
    }): Promise<LoginResponse> => {
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
          return { success: false, message: errorData.message };
        }

        // Parse the JSON body
        const data = await response.json();

        // Handle the successful response here
        const authCookie = JSON.stringify({
          ...data?.data,
          isAuthenticated: "true",
        });

        cookies().set("auth", authCookie, {
          httpOnly: true,
          secure: false,
          maxAge: 60 * 60 * 24,
        });

        console.log(data?.data?.user);
        return {
          success: true,
          userData: { ...data?.data?.user },
          message: "User logged in successfully! 🎉",
        };
      } catch (error) {
        return {
          success: false,
          message: "Unable to connect to server.",
        };
      }
    }
  );
