export interface Commerce{
    id:number;
    name: string;
    img?: string;
    ubicacion?: string;
}


export interface Product {
    id: number;
    name: string;
    imgurl: string;
    categoria?: string | null;
    almacen?: string;
    precio?: string ;
    stock?: string | null;
    unit?: "kg" | "cantidad";
}

export interface ProductInfo {
    id: number;
    product: Product
    almacen:Commerce,
    
}