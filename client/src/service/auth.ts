import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "../config/config";



export const Authentication =  async () => {

    axios.defaults.headers.get['access-token'] = JSON.parse(window.localStorage.getItem('jwtToken') as string);

    try {
        const resAuth = await axios.get(`${API_BASE_URL}/user/auth`);

        console.log(resAuth);
        
        return resAuth 
    } catch (error) {
        console.log(error)
        /*if(error.response.status === 400)*/ window.localStorage.removeItem("jwtToken");
        
        return error 
    }
}

type TresponsePost = {
    type: string, 
    token: string
}

type TerrorAxios = {
    msg: string
}
export const loginService =  async (obj: any) => {
    try {
        const {data, status} = await axios.post<TresponsePost>(`${API_BASE_URL}/user/login`, obj)
        console.log(data)

        const o = {type: data.type, token: data.token} as {type:string, token: string}
        console.log(data.type)
        console.log(status)
        return {data: o, status: status}
    } catch (error) {
        const {response, status} = error as AxiosError<TerrorAxios>;

        console.log(response?.data.msg)
        console.log(response, status)
        return {data: response?.data.msg, status: response?.status}
    }
}

