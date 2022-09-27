import {Product, Commerce, ProductInfo, Order } from './Commerce';
import { User } from './User';

export interface State {
    //userLogin
    jwtToken: string | null,
    currentType: string | null,
    currentUser: User | null,
    //Product
    products: Product[] | [],
    productInfo: ProductInfo[] | [],
    allproducts: ProductInfo[] | null,
    //Cart
    allproductsCart: ProductInfo[] | null,
    productsCart: ProductInfo[],
    productCartStore: ProductInfo[],
    storeCart: Commerce[],
    commerce: Commerce[],
    widthPhone: boolean,
    //comercio
    mycommerce: Commerce | null,
    products_commerce: ProductInfo[],
    store_select: number,
    hasStore: boolean,
    LatLng: {lng: number | null, lat: number | null}
    //Order
    orders: Order[]
    allorders: Order[]
}