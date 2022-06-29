import {Product, Commerce, ProductCart } from './Commerce';

export interface State {
    //userLogin
    jwtToken: string | null,
    currentType: string | null,
    //Product
    products: Product[],
    allproducts: Product[],
    productsCart: ProductCart[],
    commerce: Commerce[],
    widthPhone: boolean,
    //comercio
    products_commerce: Product[],
    store_select: number
}