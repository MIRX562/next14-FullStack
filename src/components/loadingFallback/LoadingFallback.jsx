import React from 'react';
import s from './loadingFallback.module.css';

export default function LoadingFallback() {
	return (
		<div className={s.loadingContainer}>
			<div className={s.loadingSpinner}></div>
			<p>Loading...</p>
		</div>
	);
}
