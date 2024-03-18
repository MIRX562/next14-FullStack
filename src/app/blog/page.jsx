import React from 'react';
import styles from './blog.module.css';
import PostCard from '@/components/postcard/PostCard';
import { getPosts } from '@/lib/data';

// const getData = async () => {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
// 		cache: 'no-cache',
// 		next: { revalidate: 3600 },
// 	});
// 	if (!res.ok) {
// 		console.log('error fetching');
// 	}
// 	return res.json();
// };

export default async function BlogPage() {
	// const posts = await getData();

	const posts = await getPosts();
	try {
		const posts = await getPosts();
		console.log(posts);
	} catch (error) {
		console.error('Error fetching posts:', error);
	}

	return (
		<div className={styles.container}>
			{posts.map((post) => (
				<div key={post.slug} className={styles.post}>
					<PostCard post={post} />
				</div>
			))}
		</div>
	);
}
