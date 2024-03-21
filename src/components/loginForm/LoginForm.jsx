import React from 'react';
import styles from './loginForm.module.css';
import { login } from '@/lib/action';
import Link from 'next/link';

export default function LoginForm() {
	return (
		<form className={styles.form} action={login}>
			<input type='text' placeholder='username' name='username' />
			<input type='password' placeholder='password' name='password' />
			<button>Login</button>
			{/* {state?.error} */}
			<Link href='/register'>
				{"Don't have an account?"} <b>Register</b>
			</Link>
		</form>
	);
}
