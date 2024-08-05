import { NextRequest, NextResponse } from "next/server";
import { apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes } from "@/routes";
import { cookies } from "next/headers";
import { MiddlewareFunctionProps } from "next-easy-middlewares";

export const authMiddleware = async ({ request }: MiddlewareFunctionProps) => {
    const isAuthenticated = cookies().get('isAuthenticated')?.value === 'true';

    const nextUrl = request.nextUrl || new URL(request.url);

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return NextResponse.next();
    }

    if (isAuthRoute) {
        if (isAuthenticated) {
            return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT(), nextUrl));
        }
        return NextResponse.next();
    }

    if (!isAuthenticated && !isPublicRoute) {
        return NextResponse.redirect(new URL("/", nextUrl));
    }

    return NextResponse.next();
};