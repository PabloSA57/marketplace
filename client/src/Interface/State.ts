import {Product, Commerce, ProductInfo } from './Commerce';

export interface State {
    //userLogin
    jwtToken: string | null,
    currentType: string | null,
    //Product
    products: ProductInfo[],
    allproducts: ProductInfo[],
    allproductsCart: ProductInfo[],
    productsCart: ProductInfo[],
    commerce: Commerce[],
    widthPhone: boolean,
    //comercio
    products_commerce: ProductInfo[],
    store_select: number
}