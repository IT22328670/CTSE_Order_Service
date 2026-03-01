import { Document } from "mongoose";

export interface IOrder extends Document {
  orderId: string;
  userId: string;
  bookId: string;
  quantity: number;
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}