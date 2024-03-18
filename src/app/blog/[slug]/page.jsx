import React, { Suspense } from 'react';
import styles from './singlePost.module.css';
import Image from 'next/image';
import PostUser from '@/components/postUser/PostUser';
import { getPost } from '@/lib/data';
import LoadingFallback from '@/components/loadingFallback/LoadingFallback';

// const getData = async (slug) => {
// 	const res = await fetch(
// 		`https://jsonplaceholder.typicode.com/posts/${slug}`,
// 		{
// 			cache: 'no-store',
// 			// next: { revalidate: 3600 },
// 		}
// 	);
// 	if (!res.ok) {
// 		console.log('error fetching');
// 	}
// 	return res.json();
// };
export const generateMetadata = async ({ params }) => {
	const { slug } = params;
	const post = await getPost(slug);
	return {
		title: post.title,
		description: post.desc,
	};
};

export default async function Postpage({ params }) {
	const { slug } = params;

	// const post = await getData(slug);

	const post = await getPost(slug);

	return (
		<div className={styles.container}>
			{post.img && (
				<div className={styles.imgContainer}>
					<Image src={post.img} alt='' fill className={styles.img} />
				</div>
			)}
			<div className={styles.textContainer}>
				<h1 className={styles.title}>{post?.title}</h1>
				<div className={styles.detail}>
					{post && (
						<Suspense fallback={<LoadingFallback />}>
							<PostUser userId={post.userId} />
						</Suspense>
					)}
					<div className={styles.detailText}>
						<span className={styles.detailTitle}>published</span>
						<span className={styles.detailValue}>
							{post.createdAt.toString().slice(4, 16)}
						</span>
					</div>
				</div>
				<div className={styles.content}>{post?.desc}</div>
			</div>
		</div>
	);
}
