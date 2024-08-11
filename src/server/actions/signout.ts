"use server";

import { NextResponse } from "next/server";
import { clearCookies } from "./clearCookies";
import { loginPage } from "@/routes";

export const signOut = async () => {
  await clearCookies();
  return "/auth/login";
};
