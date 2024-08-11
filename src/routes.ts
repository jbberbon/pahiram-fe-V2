import {getFirstMenuItemOffice} from "@/lib/menuList";
import {useUserStore} from "@/hooks/useUser";
import {cookies} from "next/headers";

/**
 * List of public routes
 * These routes do not require authentication
 * @type {string[]}
 */

export const loginPage = "/auth/login";


export const publicRoutes = ["/", "/auth/new-verification", loginPage];

/**
 * List of private routes
 * These routes require authentication
 * @type {string[]}
 */

export const authRoutes = [
    loginPage,
    "/auth/error",
    "/auth/reset",
    "/auth/new-password",
];

/**
 * The prefix for api authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = () => {
    const cookieHeader = cookies().get('auth');
    const auth = cookieHeader ? JSON.parse(cookieHeader.value) : null;
    const {role, departmentCode: departmentCode, email} = auth.user;
    return getFirstMenuItemOffice(role, departmentCode);
};

export const supervisorRoutes = ["/manage-office-accounts"];