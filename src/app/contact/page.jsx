// 'use client';
// import React, { useEffect, useState } from 'react';
import styles from './contact.module.css';
import Image from 'next/image';
// import dynamic from 'next/dynamic';

// const HydrationTestNoSSR = dynamic(
// 	() => import('@/components/etcComponent/HydrationTest'),
// 	{ ssr: false }
// );
export const metadata = {
	title: 'Contact Page',
	description: 'Next.js starter app description',
};

export default function Contactpage() {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src='/contact.png' alt='' fill className={styles.img} />
			</div>
			<div className={styles.formContainer}>
				{/* <HydrationTestNoSSR /> */}
				{/* <div suppressHydrationWarning>{a}</div> */}
				<form action='' className={styles.form}>
					<input type='text' placeholder='Name and Surname' />
					<input type='text' placeholder='Email Address' />
					<input type='text' placeholder='Phone Number (Optional)' />
					<textarea
						name=''
						id=''
						cols='30'
						rows='10'
						placeholder='Message'></textarea>
					<button>Send</button>
				</form>
			</div>
		</div>
	);
}
