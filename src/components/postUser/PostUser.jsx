import React from 'react';
import styles from './postUser.module.css';
import { getUser } from '@/lib/data';
import Image from 'next/image';

// const getData = async (userId) => {
// 	const res = await fetch(
// 		`https://jsonplaceholder.typicode.com/users/${userId}`,
// 		{
// 			// cache: 'no-cache',
// 			// next: { revalidate: 3600 },
// 		}
// 	);
// 	if (!res.ok) {
// 		console.log('error fetching');
// 	}
// 	return res.json();
// };

export default async function PostUser({ userId }) {
	// const user = await getData(userId);

	const user = await getUser(userId);

	return (
		<div className={styles.container}>
			<Image
				src={user.img ? user.img : '/noavatar.png'}
				alt=''
				width={50}
				height={50}
				className={styles.avatar}
			/>
			<div className={styles.texts}>
				<span className={styles.title}>Author</span>
				<span className={styles.username}>{user.username}</span>
			</div>
		</div>
	);
}