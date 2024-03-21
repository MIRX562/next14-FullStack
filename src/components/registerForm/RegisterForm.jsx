import { register } from '@/lib/action';
// import Link from 'next/link';
import React from 'react';
import styles from './registerForm.module.css';

export default function RegisterForm() {
	return (
		<form action={register} className={styles.form}>
			<input type='text' placeholder='username' name='username' />
			<input type='email' placeholder='email' name='email' />
			<input type='password' placeholder='password' name='password' />
			<input
				type='password'
				placeholder='password again'
				name='passwordRepeat'
			/>
			<button>Register</button>
			{/* {state?.error}
			<Link href='/login'>
				Have an account? <b>Login</b>
			</Link> */}
		</form>
	);
}
