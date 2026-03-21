import axios from "axios";
import { UserInfo } from "../types/index"

const USER_SERVICE_URL = process.env.USER_SERVICE_URL || "http://localhost:5002";

export const getUserById = async (userId: string): Promise<UserInfo> => {
    const response = await axios.get(`${USER_SERVICE_URL}/users/${userId}`);
    return response.data;
}