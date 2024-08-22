"use server";

import {flattenValidationErrors} from "next-safe-action";
import {LoginSchema} from "@/lib/form-schemas";
import {actionClient} from "@/lib/safe-action";
import {loginUserUseCase} from "@/core/use-cases/users";
import {logoutUser} from "@/core/data-access/users";

// TODO: Implement zsa
/**
 * Handles login action.
 *
 * @remarks
 * This action is used to handle login request from the client.
 * It uses the {@link loginUserUseCase} use case to perform the business logic for logging in.
 *
 * @param {LoginInput} input - The login input.
 * @returns {Promise<LoginOutput>} - The login output.
 */
export const loginUserAction = actionClient
    .schema(LoginSchema, {
        handleValidationErrorsShape: (ve) =>
            flattenValidationErrors(ve).fieldErrors,
    })
    .action(
        async ({
                   parsedInput: {email, password, remember},
               }) => {
            return await loginUserUseCase({email, password, remember});
        }

    );

export const logoutUserAction = actionClient.action(async () => {
    return await logoutUser();
});
