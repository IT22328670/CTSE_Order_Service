import axios from "axios";

const API_GATEWAY_URL = process.env.API_GATEWAY_URL;

export const sendOrderConfirmation = async (data: any) => {
    await axios.post(`${API_GATEWAY_URL}/notify/send`, data);
}