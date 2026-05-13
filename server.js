import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user_route.js';

dotenv.config();

const app = express();

app.use(express.json());



mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Connected to MongoDB');

    app.use('/api/user', userRoutes);

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("MongoDB Connection Error",err);
});