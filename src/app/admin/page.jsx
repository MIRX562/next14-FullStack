import React, { Suspense } from 'react';
import styles from './admin.module.css';
import LoadingFallback from '@/components/loadingFallback/LoadingFallback';
import AdminPosts from '@/components/adminPosts/AdminPosts';
import AdminPostForm from '@/components/adminPostForm/AdminPostForm';
import AdminUsers from '@/components/adminUsers/AdminUsers';
import AdminUserForm from '@/components/adminUserForm/AdminUserForm';
import { auth } from '@/lib/auth';

export default async function Adminpage() {
	const session = await auth();
	return (
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.col}>
					<Suspense fallback={<LoadingFallback />}>
						<AdminPosts />
					</Suspense>
				</div>
				<div className={styles.col}>
					<AdminPostForm uid={session.user.id} />
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.col}>
					<Suspense fallback={<LoadingFallback />}>
						<AdminUsers />
					</Suspense>
				</div>
				<div className={styles.col}>
					<AdminUserForm />
				</div>
			</div>
		</div>
	);
}
