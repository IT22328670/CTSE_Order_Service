import axios from "axios";
import { BookInfo } from "../types/index";

const GATEWAY_URL = process.env.API_GATEWAY_URL || "http://localhost:5000";

export const getBookById = async (bookId: string): Promise<BookInfo> => {
    const response = await axios.get(`${GATEWAY_URL}/books/${bookId}`, {
        headers: {
            "x-internal-key": process.env.INTERNAL_API_KEY || "",
        },
    });
    return response.data;
}