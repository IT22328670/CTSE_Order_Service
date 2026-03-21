import { Router } from "express";
import * as orderController from "../controllers/orderController";

const router = Router();

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               bookId:
 *                 type: string
 *               quantity:
 *                 type: number
 *             required:
 *               - userId
 *               - bookId
 *               - quantity
 *     responses:
 *       201:
 *         description: Order created successfully
 *       500:
 *         description: Server error
 */
router.post("/", orderController.createOrder);

/**
 * @swagger
 * /orders/history/{userId}:
 *   get:
 *     summary: Get order history for a user
 *    tags: [Orders]
 *    parameters:
 *     - in: path
 *      name: userId
 *     required: true
 *    schema:
 *      type: string
 * responses:
 * 200:
 * description: Order history retrieved successfully
 * 500:
 * description: Server error
 */
router.get("/history/:userId", orderController.getUserOrders);

/**
 * @swagger
 * /orders/{orderId}:
 *   get:
 *     summary: Get order details by ID
 *    tags: [Orders]
 *   parameters:
 *    - in: path
 *    name: orderId
 *  required: true
 *   schema:
 *     type: string
 * responses:
 * 200:
 * description: Order details retrieved successfully
 * 404:
 * description: Order not found
 * 500:
 * description: Server error
 */
router.get("/:orderId", orderController.getOrderById);

/**
 * @swagger
 * /orders/{orderId}/cancel:
 *   put:
 *     summary: Cancel an order
 *   tags: [Orders]
 *  parameters:
 *   - in: path
 *  name: orderId
 * required: true
 * schema:
 *  type: string
 * responses:
 * 200:
 * description: Order cancelled successfully
 * 404:
 * description: Order not found
 * 500:
 * description: Server error
 */
router.put("/:orderId/cancel", orderController.cancelOrder);


export default router;