import {createMiddleware} from 'next-easy-middlewares';
import {
    protectedAdminRoutesMiddleware,
    adminViewMiddleware,
    authMiddleware,
    borrowViewMiddleware,
    protectedEndorserRoutesMiddleware,
    officeViewMiddleware,
    protectedSupervisorRoutesMiddleware, protectedOfficeRoutesMiddleware
} from "@/lib/_middleware";

const globalMiddlewares = {
    before: authMiddleware,
}

const middlewares = {
    '/admin/*': protectedAdminRoutesMiddleware,
    '/office/*': [protectedOfficeRoutesMiddleware, protectedSupervisorRoutesMiddleware],
    '/borrow/*': protectedEndorserRoutesMiddleware,

    // Views routing logic
    '/borrow': borrowViewMiddleware,
    '/admin': adminViewMiddleware,
    '/office': officeViewMiddleware,
}

export const middleware = createMiddleware(middlewares, globalMiddlewares);

export const config = {
    matcher: [
        "/((?!.*\\..*|_next|public|public/.*|.*\\.css$).*)",
        "/",
        "/(api|trpc)(.*)",
    ],
};