import { handleGithubLogin } from '@/lib/action';
// import { auth } from '@/lib/auth';
import React from 'react';
import styles from './login.module.css';
import LoginForm from '@/components/loginForm/LoginForm';

export default async function Loginpage() {
	// const session = await auth();
	// console.log(session);

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<form action={handleGithubLogin}>
					<button className={styles.github}>login Github</button>
				</form>
				<LoginForm />
			</div>
		</div>
	);
}
