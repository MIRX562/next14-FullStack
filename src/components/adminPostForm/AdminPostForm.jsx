'use client';
import React from 'react';
import styles from './adminPostForm.module.css';
import { useFormState } from 'react-dom';
import { addPost } from '@/lib/action';

export default function AdminPostForm({ uid }) {
	const [state, formAction] = useFormState(addPost, undefined);

	return (
		<form action={formAction} className={styles.container}>
			<h1>Add New Post</h1>
			<input type='hidden' name='userId' readOnly value={uid} />
			<input type='text' name='title' placeholder='Title' />
			<input type='text' name='slug' placeholder='slug' />
			<input type='text' name='img' placeholder='img' />
			<textarea type='text' name='desc' placeholder='desc' rows={10} />
			<button>Add</button>
			{state?.error}
		</form>
	);
}
