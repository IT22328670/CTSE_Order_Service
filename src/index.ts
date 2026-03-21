import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/dbConnect';
import orderRoutes from './routes/orderRoutes';

import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// --- Swagger setup ---
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Order Service API",
      version: "1.0.0",
      description: "API documentation for Order Service",
    },
  },
  apis: ["./routes/*.ts"], // <-- look for @swagger comments in routes
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/*
app.get('/', (req, res) => {
  res.send('Order Service is running!');
});*/

app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Order Service is running on port ${PORT}`);
});