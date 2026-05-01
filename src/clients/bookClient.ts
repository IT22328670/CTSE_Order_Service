import axios from "axios";
import { BookInfo } from "../types/index";
import dotenv from "dotenv";

dotenv.config();

const API_GATEWAY_URL = process.env.API_GATEWAY_URL;

export const getBookById = async (bookId: string, authToken?: string): Promise<BookInfo> => {
    const url = `${API_GATEWAY_URL}/books/${bookId}`;
    console.log("=== bookClient debug ===");
    console.log("API_GATEWAY_URL:", API_GATEWAY_URL);      // is it undefined?
    console.log("Full URL being called:", url);             // is the path right?
    console.log("Auth token present:", !!authToken);
    console.log(`Fetching book with ID: ${bookId} using API Gateway at ${API_GATEWAY_URL}`);
    const response = await axios.get(`${API_GATEWAY_URL}/api/books/${bookId}`, {
    headers: {
      ...(authToken ? { Authorization: authToken } : {}),
    },
    
});
    return response.data;
}