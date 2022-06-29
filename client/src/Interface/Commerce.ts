export interface Commerce{
    id:number;
    name: string;
    img?: string;
    lugar?: string;
}

export interface Product {
    id: number;
    name: string;
    imgurl: string;
    categoria?: string | null;
    almacen?: string;
    precio?: string ;
    stock?: string | null;
}

export interface ProductCart {
    id: number;
    store:Commerce,
    product: Product
}