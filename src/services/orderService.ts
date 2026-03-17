import { Order } from '../models/orderModel';
import { CreateOrderDTO, IOrder } from '../interfaces/iOrder';
import { getUserById } from '../clients/userClient';
import { getBookById } from '../clients/bookClient';
import { sendOrderConfirmation } from '../clients/notificationClient';
import { v4 as uuidv4 } from 'uuid';
/*
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
};*/

export const createOrder = async (orderData: CreateOrderDTO): Promise<IOrder> => {

    /*const user = await getUserById(orderData.userId);
    console.log("User response:", user);
    if (!user) {
        throw new Error("User not found");
    }

    const book = await getBookById(orderData.bookId);
    console.log("Book response:", book);
    if (!book) {
        throw new Error("Book not found");
    }

    if (book.stock < orderData.quantity) {
        throw new Error("Not enough stock available");
    }

    const totalPrice = book.price * orderData.quantity;*/
    const totalPrice = 100* orderData.quantity; // Placeholder for price calculation

    const order = new Order({
        ...orderData,
        totalPrice,
        status: "pending",
        orderDate: new Date(),
    });

    const savedOrder = await order.save();

    /*await sendOrderConfirmation({
        userId: user.userId,
        email: user.email,
        orderId: savedOrder.orderId,
        bookTitle: book.title,
    });*/

    return savedOrder;
};

export const getOrderByUser = async (userId: string): Promise<IOrder[]> => {
    return await Order.find({ userId });
};

export const getOrderById = async (orderId: string): Promise<IOrder | null> => {
    return await Order.findOne({ orderId });
};

export const cancelOrder = async (orderId: string): Promise<IOrder | null> => {
    return await Order.findOneAndUpdate(
        { orderId },
        { status: "cancelled" },
        { new: true }
    );
};