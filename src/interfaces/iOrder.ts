import { Document } from "mongoose";

export type OrderStatus = "pending" | "completed" | "cancelled";

export interface IOrder extends Document {
  orderId: string;
  userId: string;
  bookId: string;
  quantity: number;
  totalPrice: number;
  status: OrderStatus;
  orderDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateOrderDTO {
  userId: string;
  bookId: string;
  quantity: number;
}