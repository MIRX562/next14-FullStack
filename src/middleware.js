import NextAuth from 'next-auth';
import { authConfig } from './lib/auth.config';

export default NextAuth(authConfig).auth;

export const config = {
	// Apply middleware to all routes
	matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};
