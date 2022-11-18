import axios, { AxiosError } from "axios"
import { API_BASE_URL } from "../config/config"

//const API_BASE_URL = "http://localhost:3001/product-store"

export const bestProductsStore = async (storeId: number) => {
    try {
        const products = axios.get(`${API_BASE_URL}/product-store/bestproducts/${storeId}`)

        return (await products).data
    } catch (error) {
        return error as AxiosError
    }

}
