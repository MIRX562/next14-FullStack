import { getUsers } from '@/lib/data';
import React from 'react';
import styles from './adminUsers.module.css';
import Image from 'next/image';
import { deleteUser } from '@/lib/action';

export default async function AdminUsers() {
	const users = await getUsers();
	return (
		<div className={styles.container}>
			<h1>Users</h1>
			{users.map((user) => (
				<div className={styles.user} key={user.id}>
					<div className={styles.detail}>
						<Image
							src={user.img || '/noAvatar.png'}
							alt=''
							width={50}
							height={50}
						/>
						<span className={styles.userName}>{user.username}</span>
						<form action={deleteUser}>
							<input type='hidden' name='id' value={user.id} />
							<button className={styles.userButton}> Delete</button>
						</form>
					</div>
				</div>
			))}
		</div>
	);
}
