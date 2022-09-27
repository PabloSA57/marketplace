import axios, { AxiosError } from "axios";
import { Commerce } from "../Interface/Commerce";
const API_BASE_URL = "http://localhost:3001/store";


export const createStore = async (date: any) => {
    try {
        const res = await axios.post(API_BASE_URL + "/create", date);

        return res 
    } catch (error) {
        const err = error as AxiosError;
        if(err){
            return err.response
        }
    }
}

export const hasStore = async () => {
    
    axios.defaults.headers.get['access-token'] = JSON.parse(window.localStorage.getItem('jwtToken') as string);
    try {
        const res = await axios.get(API_BASE_URL + "/hasstore");

        return res.data;
    } catch (error) {
        return error
    }
}

export const getStoreAround = async (lat: number, lng: number) => {
    console.log(lat, lng)
    try {
        const resp = await axios.get(`${API_BASE_URL}/getstoresaround?lat=${lat}&lng=${lng}`);

        return resp as any
    } catch (error) {
        return error as any
    }
}