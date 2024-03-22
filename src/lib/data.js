'use server';
import { unstable_noStore } from 'next/cache';
import { Post, User } from './models';
import { connectToDb } from './utils';
// TEMPORARY DATA
// const users = [
// 	{ id: 1, name: 'John' },
// 	{ id: 2, name: 'Jane' },
// ];

// const posts = [
// 	{ id: 1, title: 'Post 1', body: '......', userId: 1 },
// 	{ id: 2, title: 'Post 2', body: '......', userId: 1 },
// 	{ id: 3, title: 'Post 3', body: '......', userId: 2 },
// 	{ id: 4, title: 'Post 4', body: '......', userId: 2 },
// ];

export const getPosts = async () => {
	try {
		await connectToDb();
		const posts = await Post.find();
		// console.log(posts);
		return posts;
	} catch (error) {
		console.error('Error fetching posts:', error);
		throw new Error('Failed to fetch posts');
	}
};
export const getPost = async (slug) => {
	try {
		connectToDb();
		const post = await Post.findOne({ slug });
		// console.log(post);
		return post;
	} catch (error) {
		console.log(error);
		throw new Error('Failed to fetch post');
	}
};
export const getUser = async (id) => {
	unstable_noStore();
	try {
		connectToDb();
		const user = await User.findById(id);
		// console.log(user);
		return user;
	} catch (error) {
		console.log(error);
		throw new Error('Failed to fetch user');
	}
};
export const getUsers = async () => {
	try {
		connectToDb();
		const users = await User.find();
		// console.log(users);
		return users;
	} catch (error) {
		console.log(error);
		throw new Error('Failed to fetch users');
	}
};
