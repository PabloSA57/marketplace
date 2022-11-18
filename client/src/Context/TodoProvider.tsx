import React, {useReducer} from 'react';

import {TodoContext} from './Context';
import {todoReducer} from './todoReducer';
import {State} from '../Interface/State';
import {Product, Commerce, ProductInfo, Order} from '../Interface/Commerce';
import { User } from '../Interface/User';


const INITIAL_STATE: State = {
    jwtToken: window.localStorage.getItem('jwtToken') || null,
    currentType: window.localStorage.getItem('type') || null ,
    currentUser: null,
    products:[],
    productInfo: [],
    allproducts: [],
    allproductsCart: [],
    productsCart:[],
    productCartStore: [],
    storeCart: [],
    commerce: [],
    widthPhone: false,
    mycommerce: null,
    products_commerce: [],
    store_select: 0,
    hasStore: false,
    LatLng: {lng: sessionStorage.getItem('lng') as number | null, lat: sessionStorage.getItem('lat') as number | null,},
    orders: [],
    allorders:[],
    socket: null,
    stateDrawer: {noti: false, order: false}
}

interface props{ 
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children} : props) => {

    const [todoState,dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const setCurrentUser = async (u: User) => {
        dispatch({type: "setCurrentUser", payload:u})
    }

    const getProductos = async (p: ProductInfo[]) => {
        dispatch({type: "getProductos", payload:p})
    }

    const getProductToAdd = async (p: Product[]) => {
        dispatch({type: "getProductToAdd", payload:p})
    }

    const updateTipo = (tipo: string) => {
        dispatch({type: "filterTipo", payload: tipo})
    }

    const updateProducto = (id:number, precio: string | undefined, stock: string | null | undefined) => {
        dispatch({type: "updateProducto", payload: {id, precio, stock}})
    }

    const deleteProduct = (id: number) => {
        dispatch({type: "deleteProduct", payload: id})
    }

    const searchProduct = (name: string, type: string) => {
        dispatch({type: 'searchProduct', payload: {name, type}})
    }

    const getComercios = (c: Commerce[]) => {
        dispatch({type: "getComercios", payload: c})
    }

    const changeWidth = (b: boolean) => {
        dispatch({type: "changePhone", payload: b})
    }

    const loginAuth = (type: string | null, token: string | null) => {
        dispatch({type: "token", payload: token})
        dispatch({type: "type", payload: type})
    }

    const addProductToCart = (p: ProductInfo[]) => {
        dispatch({type:'addProductsCart', payload: p})
    }

    const addProductToCartCopy = (p: ProductInfo[]) => {
        dispatch({type:'addProductsCartCopy', payload: p})
    }

    const addProductCart = (p: ProductInfo) => {
        dispatch({type:'addProductCart', payload: p})
    }

    const updateProductCart = (obj: {id: number,newprecio: number}) => {
        dispatch({type:'updateProductCart', payload: obj})
    }

    const deleteProductCart = (id: number) => {
        dispatch({type:'deleteProductCart', payload: id})
    }
    const selectStore = (id: number) => {
        dispatch({type:'selectStore', payload: id});
    }

    const getStoreCart = (c: Commerce[]) => {
        dispatch({type:'getStoreCart', payload: c})
    }

    const selectStoreCart = (id: number) => {
        dispatch({type: 'selectStoreCart', payload:id})
    }

    const setCommerce = (c: Commerce) => {
        dispatch({type:'setCommerce', payload: c})
    }

    const setHasStore = (b: boolean) => {
        dispatch({type:'setHasStore', payload: b})
    }

    //Order
    const setOrder = (orders: Order[]) => {
        dispatch({type:'setOrders', payload: orders})
    }

    const filterOrders = (f: string) => {
        dispatch({type:'filterOrders', payload:f})
    }

    //Socket
    const setSocket = (socket: any) => {
        dispatch({type:'setSocket', payload:socket})
    }
    
    //Notification
    const filterNotication = (obj: {state?: string, fecha?: string, pay?: string}) => {
        dispatch({type:'filterNotification', payload:obj})
    }

    //Drawer 
    const setStateDrawer = (obj: {noti: boolean, order: boolean}) => {
        dispatch({type:'setStateDrawer', payload:obj})
    }

    return (
        <TodoContext.Provider value={{
            todoState,
            setCurrentUser,
            getProductos,
            getProductToAdd,
            updateTipo,
            searchProduct,
            getComercios,
            changeWidth,
            loginAuth,
            updateProducto,
            deleteProduct,
            getStoreCart,
            selectStoreCart,
            addProductToCart,
            addProductToCartCopy,
            addProductCart,
            updateProductCart,
            deleteProductCart,
            selectStore,
            setCommerce,
            setHasStore,
            setOrder,
            filterOrders,
            setSocket,
            filterNotication,
            setStateDrawer
        }}>
            {children}
        </TodoContext.Provider>
    
)}