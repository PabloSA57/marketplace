import { User } from "./User";


export interface Commerce{
    id:number;
    name: string;
    imgurl?: string;
    location?: string;
    number_phone?: string;
    lat?: number;
    lon?: number;
}


export interface Product {
    id: number;
    name: string;
    imgurl: string;
    categoria?: string | null;
    almacen?: string;
    precio?: string ;
    stock?: string | null;
    unit?: "kg" | "lt";
}

export interface ProductInfo {
    id?: number;
    product: Product
    almacen?:Commerce,
    
}


export interface DetailOrder {
    id: number;
    precio: number;
    quantity: number;
    product: Product;
}

export interface InfoCLient {
    id: number;
    direction: string;
    lat: number;
    lon: number;
    number_phone: string;
}
export interface Order {
    id: string;
    amount: number;
    state: string;
    date: string;
    user: User;
    detailorders: DetailOrder[];
    infoclient: InfoCLient;
    store: Commerce;
    type_payment: string
}