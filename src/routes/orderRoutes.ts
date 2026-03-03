import { Router } from "express";
import * as orderController from "../controllers/orderController";

const router = Router();

router.post("/", orderController.createOrder);

router.get("/history/:userId", orderController.getUserOrders);
router.get("/:orderId", orderController.getOrderById);

router.put("/:orderId/cancel", orderController.cancelOrder);


export default router;