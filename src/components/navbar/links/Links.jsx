'use client';
import React, { useState } from 'react';
import styles from './links.module.css';
import NavbarLink from './navbarlink/NavbarLink';
import Image from 'next/image';
import { handleSignOut } from '@/lib/action';
import { auth } from '@/lib/auth';
const links = [
	{
		title: 'Homepage',
		path: '/',
	},
	{
		title: 'About',
		path: '/about',
	},
	{
		title: 'Contact',
		path: '/contact',
	},
	{
		title: 'Blog',
		path: '/blog',
	},
];

export default function Links({ session }) {
	const [open, setOpen] = useState(false);
	// const isAdmin = true;
	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{links.map((link) => (
					<NavbarLink item={link} key={link.title} />
				))}
				{session?.user ? (
					<>
						{session.user.isAdmin && (
							<NavbarLink item={{ title: 'Admin', path: '/admin' }} />
						)}
						<form action={handleSignOut}>
							<button className={styles.logout}>Logout</button>
						</form>
					</>
				) : (
					<NavbarLink item={{ title: 'Login', path: '/login' }} />
				)}
			</div>
			<Image
				className={styles.menuButton}
				src='/menu.png'
				alt=''
				width={30}
				height={30}
				onClick={() => setOpen((prev) => !prev)}
			/>
			{open && (
				<div className={styles.mobileLinks}>
					{links.map((link) => (
						<NavbarLink item={link} key={link.title} />
					))}
				</div>
			)}
		</div>
	);
}
