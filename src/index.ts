import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/dbConnect';
import orderRoutes from './routes/orderRoutes';

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Order Service is running!');
});

app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Order Service is running on port ${PORT}`);
});