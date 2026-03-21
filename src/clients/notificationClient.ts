import axios from "axios";

const NOTIFICATION_SERVICE_URL = process.env.NOTIFICATION_SERVICE_URL || "http://localhost:5004/notify";

export const sendOrderConfirmation = async (data: any) => {
    await axios.post(`${NOTIFICATION_SERVICE_URL}/send`, data);
}