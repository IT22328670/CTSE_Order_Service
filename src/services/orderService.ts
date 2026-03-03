import { Order } from '../models/orderModel';
import { CreateOrderDTO, IOrder } from '../interfaces/iOrder';

export const createOrder = async (orderData: CreateOrderDTO) : Promise<IOrder> => {
    const order = new Order({...orderData,
        status: "pending",
        orderDate: new Date(),
    });
    return await order.save();
};

export const getOrderByUser = async (userId: string) : Promise<IOrder[]> => {
    return await Order.find({ userId });
};


export const getOrderById = async (orderId: string) : Promise<IOrder | null> => {
    return await Order.findOne({orderId});
};

export const cancelOrder = async (orderId: string) : Promise<IOrder | null> => {
    return await Order.findOneAndUpdate(
        { orderId },
        { status: "cancelled" },
        { new: true }
    );
};