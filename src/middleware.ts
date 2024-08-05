import {createMiddleware} from 'next-easy-middlewares';
import {authMiddleware} from "@/utils/_middleware";

const globalMiddlewares = {
    before: authMiddleware,
}

const middlewares = {
    '/': authMiddleware,
    ''
}

export const middleware = createMiddleware(middlewares, globalMiddlewares);

export const config = {
    matcher: ['/((?!api/|_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
};