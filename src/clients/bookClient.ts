import axios from "axios";
import { BookInfo } from "../types/index";

const API_GATEWAY_URL = process.env.API_GATEWAY_URL;

export const getBookById = async (bookId: string, authToken?: string): Promise<BookInfo> => {
    const response = await axios.get(`${API_GATEWAY_URL}/api/books/${bookId}`, {
    headers: {
      ...(authToken ? { Authorization: authToken } : {}),
    },
});

    return response.data;
}