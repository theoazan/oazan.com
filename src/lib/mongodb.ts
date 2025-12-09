import mongoose from 'mongoose';

export async function connect() {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }

        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGO_URI, {});
        }

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Connected to the database');
        });

        connection.on('error', (error) => {
            console.error('Error connecting to the database:', error);
            process.exit(1);
        });

        connection.on('disconnected', () => {
            console.log('Disconnected from the database');
        });

        // Handle unexpected termination
        process.on('SIGINT', async () => {
            await connection.close();
            console.log('Connection to the database closed due to app termination');
            process.exit(0);
        });

    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); 
    }
}
