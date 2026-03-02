import { Request, Response } from "express";
import * as orderService from "../services/orderService";
import { CreateOrderDTO } from "../interfaces/iOrder";

export const createOrder = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const orderData: CreateOrderDTO = req.body;

        const orcer = await orderService.createOrder(orderData);

        res.status(201).json({
            success: true,
            message: "Order created successfully",
            data: orcer,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create order",
            error: (error as Error).message,
        });
        }
};

    export const getUserOrders = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const { userId } = req.params as { userId: string };

            const orders = await orderService.getOrderByUser(userId);

            res.status(200).json({
                success: true,
                message: "Orders retrieved successfully",
                data: orders,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to retrieve orders",
                error: (error as Error).message,
            });
        }
    };

export const getOrderById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { orderId } = req.params as { orderId: string };  

        const order = await orderService.getOrderById(orderId);

        if (!order) {
            res.status(404).json({
                success: false,
                message: "Order not found",
            });
            return;
        }
        
        res.status(200).json({
            success:true,
            data: order,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch order",
            error: (error as Error).message,
        });
    }
};

export const cancelOrder = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { orderId } = req.params as { orderId: string };

        const order = await orderService.cancelOrder(orderId);

        if (!order) {
            res.status(404).json({
                success: false,
                message: "Order not found",
            });
            return;
        }
            res.status(200).json({
                success: true,
                message: "Order cancelled successfully",
                data: order,
            });

    } catch(error) {
        res.status(500).json({
            success: false,
            message: "Failed to cancel order",
            error: (error as Error).message,
        });
    }
};