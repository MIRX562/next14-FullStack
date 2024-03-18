'use client';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export default function NavTest() {
	// client side nav
	const router = useRouter();
	const pathname = usePathname();
	const searchParam = useSearchParams();

	const q = searchParam.get('q');

	const handleClick = () => {
		console.log(q);

		// router.push('/');
		// router.replace('/');
		// router.refresh();
		// router.back();
		// router.forward();
		// router.prefetch('/');
	};
	return (
		<div>
			<Link href='/' prefetch={false}>
				click
			</Link>
			<button onClick={handleClick}>UseRouter</button>
		</div>
	);
}
