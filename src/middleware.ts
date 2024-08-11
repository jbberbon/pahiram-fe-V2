import {createMiddleware} from 'next-easy-middlewares';
import {
    adminMiddleware,
    adminViewMiddleware,
    authMiddleware,
    borrowViewMiddleware,
    loginMiddleware,
    officeViewMiddleware,
    supervisorMiddleware,
    endorserMiddleware
} from "@/utils/_middleware";

const globalMiddlewares = {
    before: authMiddleware,
}

const middlewares = {
    '/auth/login': loginMiddleware,
    '/admin/*': adminMiddleware,
    '/office/*': supervisorMiddleware,
    '/borrow/manage-endorsements': endorserMiddleware,

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