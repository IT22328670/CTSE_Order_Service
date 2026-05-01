import axios from "axios";
import { BookInfo } from "../types/index";
import dotenv from "dotenv";

dotenv.config();

const API_GATEWAY_URL = process.env.API_GATEWAY_URL;

export const getBookById = async (bookId: string, authToken?: string): Promise<BookInfo> => {
    console.log(`Fetching book with ID: ${bookId} using API Gateway at ${API_GATEWAY_URL}`);
    const response = await axios.get(`${API_GATEWAY_URL}/api/books/${bookId}`, {
    headers: {
      ...(authToken ? { Authorization: authToken } : {}),
    },
});

    return response.data;
}