import { NextResponse } from "next/server";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  loginPage,
  publicRoutes,
  supervisorRoutes,
  adminDefaultRedirect,
  borrowerDefaultRedirect,
} from "@/routes";
import { cookies } from "next/headers";
import { MiddlewareFunctionProps } from "next-easy-middlewares";

export const borrowMiddleware = async ({
  request,
}: MiddlewareFunctionProps) => {
  return NextResponse.next();
};

export const supervisorMiddleware = async ({
  request,
}: MiddlewareFunctionProps) => {
  const cookieHeader = cookies().get("auth");
  const auth = cookieHeader ? JSON.parse(cookieHeader.value) : null;

  const isSupervisor = auth?.user?.role === "SUPERVISOR";

  const [, , , thirdSlashSplit] = request.nextUrl.pathname.split("/");
  const currentUrl = thirdSlashSplit ? `/${thirdSlashSplit}` : "/";

  if (!isSupervisor && supervisorRoutes.includes(currentUrl)) {
    const referer = request.headers.get("referer");
    const redirectUrl = referer
      ? new URL(referer)
      : new URL(loginPage, request.url);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
};

export const officeViewMiddleware = async ({
  request,
}: MiddlewareFunctionProps) => {
  const nextUrl = request.nextUrl || new URL(request.url);
  return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT(), nextUrl));
};

export const adminViewMiddleware = async ({
  request,
}: MiddlewareFunctionProps) => {
  const nextUrl = request.nextUrl || new URL(request.url);
  return NextResponse.redirect(new URL(adminDefaultRedirect, nextUrl));
};

export const borrowViewMiddleware = async ({
  request,
}: MiddlewareFunctionProps) => {
  const nextUrl = request.nextUrl || new URL(request.url);
  console.log("Redirected to borrow default page");
  return NextResponse.redirect(new URL(borrowerDefaultRedirect, nextUrl));
};

export const loginMiddleware = async ({ request }: MiddlewareFunctionProps) => {
  const cookieHeader = cookies().get("auth");
  const auth = cookieHeader ? JSON.parse(cookieHeader.value) : null;

  if (auth && auth.user) {
    const nextUrl = request.nextUrl;
    if (
      auth.user.role &&
      auth.user.role !== "BORROWER" &&
      auth.user.departmentCode
    ) {
      console.log("an employee");
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT(), nextUrl));
    } else if (auth.user.role === "BORROW") {
      console.log("A borrower fcking sht");
      return NextResponse.redirect(new URL(borrowerDefaultRedirect, nextUrl));
    }

    // return // unauthorized
    console.log("Hi");
  }

  return NextResponse.next();
};

export const authMiddleware = async ({ request }: MiddlewareFunctionProps) => {
  const cookieHeader = cookies().get("auth");
  const auth = cookieHeader ? JSON.parse(cookieHeader.value) : null;

  const isAuthenticated = auth?.isAuthenticated;

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
    return NextResponse.redirect(new URL(loginPage, nextUrl));
  }

  return NextResponse.next();
};

export const adminMiddleware = async ({ request }: MiddlewareFunctionProps) => {
  const cookieHeader = cookies().get("auth");
  const auth = cookieHeader ? JSON.parse(cookieHeader.value) : null;

  const isAdmin = auth?.user?.isAdmin;

  if (!isAdmin) {
    const referer = request.headers.get("referer");
    const redirectUrl = referer
      ? new URL(referer)
      : new URL(loginPage, request.url);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
};
