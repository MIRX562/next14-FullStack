import mongoose from 'mongoose';

const connection = {
	isConnected: false,
};

export const connectToDb = async () => {
	try {
		if (connection.isConnected) {
			console.log('Using existing connection');
			return;
		}
		const db = await mongoose.connect(process.env.MONGO);
		connection.isConnected = db.connections[0].readyState === 1;
	} catch (error) {
		console.error('Error connecting to database:', error);
		throw error; // Re-throw the error to propagate it upwards
	}
};
