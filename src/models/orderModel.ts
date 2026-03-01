import mongoose, { Schema } from "mongoose";
import { IOrder } from "../interfaces/iOrder";

const orderSchema = new Schema<IOrder>(
  {
    orderId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    userId: { 
        type: String, 
        required: true 
    },
    bookId: { 
        type: String, 
        required: true 
    },
    quantity: { 
        type: Number, 
        required: true,
        min: 1 
    },
    totalPrice: { 
        type: Number, 
        required: true,
        min: 0 
    },
  },
  { 
    timestamps: true 
}
);

export default mongoose.model<IOrder>("Order", orderSchema);