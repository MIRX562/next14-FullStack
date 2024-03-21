import { addPost, deletePost } from '@/lib/action';
import React from 'react';

export default function serverActionTestPage() {
	// const inComponentAction = async () => {
	// 	'use server';
	// 	console.log('done');
	// };
	return (
		<div>
			<form action={addPost}>
				<input type='text' placeholder='title' name='title' />
				<input type='text' placeholder='desc' name='desc' />
				<input type='text' placeholder='slug' name='slug' />
				<input type='text' placeholder='userid' name='userId' />
				<button>create</button>
			</form>
			<form action={deletePost}>
				<input type='text' placeholder='postId' name='id' />
				<button>delete</button>
			</form>
		</div>
	);
}
