export const authConfig = {
	pages: {
		signIn: '/login',
	},
	providers: [],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.isAdmin = user.isAdmin;
			}
			return token;
		},
		async session(session, token) {
			if (token) {
				session.user.id = token.id;
				session.user.isAdmin = token.id;
			}
			return session;
		},
		authorized({ auth, request }) {
			const user = auth?.user;
			const isOnAdminPage = request.nextUrl?.pathname.startsWith('/admin');
			const isOnBlogPage = request.nextUrl?.pathname.startsWith('/blog');
			const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');

			// only admins can acces /admin
			if (isOnAdminPage && !user?.isAdmin) {
				return false;
			}

			// only authenticated  user can access blog
			if (isOnBlogPage && !user) {
				return false;
			}

			//only authenticated user can reach login
			if (isOnLoginPage && user) {
				return Response.redirect(new URL('/', request.nextUrl));
			}
			return true;
		},
	},
};
