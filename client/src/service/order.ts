import axios, { AxiosError } from "axios";

const API_BASE_URL = "http://localhost:3001/mercadopago/checkout";

export const AddOrder  = async ({products, storeId, amount, infoClient, typePayment, delivery}: any) => {

    console.log(amount)
    console.log(delivery)
    try {
        const resMP = await axios.post(API_BASE_URL, {products, storeId, amount, infoClient, typePayment, delivery });
        
        return resMP.data
    } catch (error) {
        return error as AxiosError
    }
    

}

const API_BASE_URL_ORDER = "http://localhost:3001/order";

export const CancelOrder = async (id: string) => {
    try {
        const res = await axios.put(`${API_BASE_URL_ORDER}/cancelorder/${id}`)

        return res
    } catch (error) {
        return error as AxiosError
    }
}

export const countAndAmount = async (id: number) => {
    try {
        const res = await axios.get(`${API_BASE_URL_ORDER}/infosel/${id}`)

        return res.data
    } catch (error) {
        return error as AxiosError
    }
}