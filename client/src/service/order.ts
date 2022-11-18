import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../config/config";


//const API_BASE_URL = "http://localhost:3001/mercadopago/checkout";

export const AddOrder  = async ({products, storeId, amount, infoClient, typePayment, delivery}: any) => {
    try {
        const resMP = await axios.post(`${API_BASE_URL}/mercadopago/checkout`, {products, storeId, amount, infoClient, typePayment, delivery });
        console.log(resMP)
        return resMP.data
    } catch (error) {
        console.log(error)
        return new Error('fallo el ')
    }
    

}

const API_BASE_URL_ORDER = "http://localhost:3001/order";

export const UpdateOrder = async (id: string, state: string) => {
    try {
        const res = await axios.put(`${API_BASE_URL}/order/updateorder/${id}`, {state})

        return res
    } catch (error) {
        return error as AxiosError
    }
}

export const countAndAmount = async (id: number) => {
    try {
        const res = await axios.get(`${API_BASE_URL}/order/infosel/${id}`)

        return res.data
    } catch (error) {
        return error as AxiosError
    }
}

export const getOrders = async (id: number | string | undefined, type: string) => {
    try {
        const res = await axios.get(`${API_BASE_URL}/order/getorder?id=${id}&type=${type}`)

        return res.data
    } catch (error) {
        return error as AxiosError
    }
}