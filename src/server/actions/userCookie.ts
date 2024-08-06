"use server";

import {cookies} from "next/headers";

export class UserCookie {
    static getRoleFromCooke = async () => {
        const cookie = cookies().get('auth');

        if (!cookie) {
            return null;
        }

        const {user} = JSON.parse(cookie);

        return user.role;
    }
}