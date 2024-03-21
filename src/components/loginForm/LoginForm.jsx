'use client';
import React, { useEffect } from 'react';
import styles from './loginForm.module.css';
import { login } from '@/lib/action';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
	const [state, formmAction] = useFormState(login, undefined);

	const router = useRouter();

	useEffect(() => {
		state?.success && router.push('/');
	}, [state?.success, router]);

	return (
		<form className={styles.form} action={formmAction}>
			<input type='text' placeholder='username' name='username' />
			<input type='password' placeholder='password' name='password' />
			<button>Login</button>
			{state?.error}
			<Link href='/register'>
				{"Don't have an account?"} <b>Register</b>
			</Link>
		</form>
	);
}
