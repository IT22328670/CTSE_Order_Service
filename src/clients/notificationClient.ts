import axios from "axios";

const GATEWAY_URL = process.env.API_GATEWAY_URL || "http://localhost:5000";

export const sendOrderConfirmation = async (data: any) => {
    await axios.post(`${GATEWAY_URL}/notifications/order`, data, {
        headers: {
            "x-internal-key": process.env.INTERNAL_API_KEY || "",
        },
    });
}