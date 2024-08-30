import { convexAuthNextjsMiddleware } from '@convex-dev/auth/nextjs/server';

export default convexAuthNextjsMiddleware;

export const config = {
    matcher: ['/((?!login|api|_next/static|_next/image|images|favicon.ic|signup).*)'],
};