import {useReducer} from 'react';

import {TodoContext} from './Context';
import {todoReducer} from './todoReducer';
import {State} from '../Interface/State';
import {Product, Commerce, ProductInfo} from '../Interface/Commerce';


const INITIAL_STATE: State = {
    jwtToken: window.localStorage.getItem('jwtToken') || null,
    currentType: window.localStorage.getItem('type') || null ,
    products:[],
    allproducts: [],
    allproductsCart: [],
    productsCart:[],
    commerce: [],
    widthPhone: false,
    products_commerce: [],
    store_select: 0,
}

interface props{ 
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children} : props) => {

    const [todoState,dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const getProductos = async (p: ProductInfo[]) => {
        dispatch({type: "getProductos", payload:p})
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

    return (
        <TodoContext.Provider value={{
            todoState,
            getProductos,
            updateTipo,
            getComercios,
            changeWidth,
            loginAuth,
            updateProducto,
            deleteProduct,
            addProductToCart,
            addProductToCartCopy,
            addProductCart,
            updateProductCart,
            deleteProductCart,
            selectStore
        }}>
            {children}
        </TodoContext.Provider>
    
)}