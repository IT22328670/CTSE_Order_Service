import axios from "axios";
import { UserInfo } from "../types/index"
import dotenv from "dotenv";

dotenv.config();

const API_GATEWAY_URL = process.env.API_GATEWAY_URL;

export const getUserById = async (userId: string): Promise<UserInfo> => {
    const response = await axios.get(`${API_GATEWAY_URL}/api/users/${userId}`);
    return response.data;
}