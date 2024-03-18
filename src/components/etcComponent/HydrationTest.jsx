'use client';
import React, { useEffect, useState } from 'react';

export default function HydrationTest() {
	const [isClient, setClient] = useState(false);

	useEffect(() => {
		setClient(true);
	}, []);

	const a = Math.random();
	console.log(a);
	return (
		<>
			<div>
				<p>{isClient && a}</p>
			</div>
		</>
	);
}
