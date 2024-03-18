import Link from 'next/link';
import React from 'react';

export default function Notfound() {
	return (
		<div>
			<h1>Not Found</h1>
			<p>Page you looking for is not found</p>
			<Link href='/'>Return to Homepage</Link>
		</div>
	);
}
