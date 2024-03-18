'use client';
import Link from 'next/link';
import React from 'react';
import styles from './navLink.module.css';
import { usePathname } from 'next/navigation';

export default function NavbarLink({ item }) {
	const pathName = usePathname();

	return (
		<div>
			<Link
				className={`${styles.container} ${
					pathName === item.path && styles.active
				}`}
				href={item.path}>
				{item.title}
			</Link>
		</div>
	);
}
