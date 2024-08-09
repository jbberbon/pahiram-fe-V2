"use server";
import {cookies} from "next/headers";

export const clearCookies =  async () => {
    const cookiesInstance = cookies();
    cookiesInstance.delete('auth');
};
