'use server';

import { revalidatePath } from 'next/cache';
import { Post, User } from './models';
import { connectToDb } from './utils';
import { signIn, signOut } from '@/lib/auth';
import bcrypt from 'bcryptjs';

export const addPost = async (formData) => {
	const { title, desc, slug, userId } = Object.fromEntries(formData);

	try {
		connectToDb();
		const newPost = new Post({
			title,
			desc,
			slug,
			userId,
		});
		await newPost.save();
		revalidatePath('/blog');
		console.log('Success');
	} catch (error) {
		console.log(error);
	}

	console.log(formData);
};
export const deletePost = async (formData) => {
	const { id } = Object.fromEntries(formData);

	try {
		connectToDb();

		await Post.findByIdAndDelete(id);
		revalidatePath('/blog');
		console.log('Success delete from db');
	} catch (error) {
		console.log(error);
	}

	console.log(formData);
};

export const handleGithubLogin = async () => {
	await signIn('github');
};
export const handleSignOut = async () => {
	await signOut();
};

export const register = async (previousTate, formData) => {
	const { username, email, password, passwordRepeat, img } =
		Object.fromEntries(formData);

	if (password !== passwordRepeat) {
		return { error: 'Password does not match' };
		// throw new Error('Password do not Match');
	}

	try {
		connectToDb();
		const user = await User.findOne({ username });

		if (user) {
			return { error: 'username already exist' };
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			username,
			email,
			password: hashedPassword,
			img,
		});
		await newUser.save();
		// console.log(formData);
	} catch (error) {
		// console.log(error);
		return { error: 'failed creating new User' };
	}
	return { success: true };
};

export const login = async (previousState, formData) => {
	const { username, password } = Object.fromEntries(formData);
	try {
		await signIn('credentials', { username, password });
		return { success: true };
	} catch (error) {
		// console.log(error);
		if (error.message.includes('CredentialsSignIn')) {
			return { error: 'Invalid Username or Password' };
		}
		throw error;
	}
};
