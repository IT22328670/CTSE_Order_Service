import axios from "axios";
import { BookInfo } from "../types/index";

const CATALOG_SERVICE_URL = process.env.CATALOG_SERVICE_URL || "http://localhost:5000/api";

export const getBookById = async (bookId: string): Promise<BookInfo> => {
    const response = await axios.get(`${CATALOG_SERVICE_URL}/books/${bookId}`, {
    headers: {
      Authorization: `Bearer ${process.env.SERVICE_TOKEN}`,
    },
});

    return response.data;
}