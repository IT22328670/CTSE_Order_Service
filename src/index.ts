import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/dbConnect';

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Order Service is running!');
});

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Order Service is running on port ${PORT}`);
});