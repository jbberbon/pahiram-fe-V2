"use server";
import {cookies} from "next/headers";

export const clearCookies =  async () => {
    const cookiesInstance = cookies();
    cookiesInstance.delete("isAuthenticated");
    cookiesInstance.delete("apcisToken");
    cookiesInstance.delete("pahiramToken");
};
