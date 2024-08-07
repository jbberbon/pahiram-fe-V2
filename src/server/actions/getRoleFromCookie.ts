"use server";

import {cookies} from "next/headers";

export const getUserFromCookie = async () => {
    const cookie = cookies().get('auth');

    if (!cookie) {
        return null;
    }

    const {user} = JSON.parse(cookie.value);

    return user;
}