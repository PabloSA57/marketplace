import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../config/config";

//const API_BASE_URL = "http://localhost:3001/store";


export const createStore = async (date: any) => {
    try {
        const res = await axios.post(`${API_BASE_URL}/store/create` , date);

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
        const res = await axios.get(`${API_BASE_URL}/store/hasstore`);

        
        return res.data;
    } catch (error) {
        return error
    }
}

export const getStoreAround = async (lat: number, lng: number) => {
    console.log(lat, lng)
    try {
        const resp = await axios.get(`${API_BASE_URL}/store/getstoresaround?lat=${lat}&lng=${lng}`);

        return resp as any
    } catch (error) {
        return error as any
    }
}

export const updateStore = async (newdata: any, file: any, idStore: number) => {
    //deveria mandar el jwt para verificar el idStore
    let obj: any = {idStore}

    if(newdata && !file){
        console.log('si newdate, no file')
        obj = {...obj, ...newdata}
    }else if(file && !newdata){
        console.log('no newdate, si file')
        obj = {...obj, newImage: file}
    }else {
        obj = {...obj, newImage: file, ...newdata}
        console.log('si, ambos')
    }

    console.log(obj)
    /*try {
        const resp = await axios.put(`${API_BASE_URL}/updateStore`, obj);

        return resp as any
    } catch (error) {
        return error as any
    }*/
}