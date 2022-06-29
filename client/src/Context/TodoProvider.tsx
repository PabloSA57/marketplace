import {useReducer} from 'react';

import {TodoContext} from './Context';
import {todoReducer} from './todoReducer';
import {State} from '../Interface/State';
import {Product, Commerce, ProductCart} from '../Interface/Commerce';


const INITIAL_STATE: State = {
    jwtToken: window.localStorage.getItem('jwtToken') || null,
    currentType: window.localStorage.getItem('type') || null ,
    products:[],
    allproducts: [],
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

    const getProductos = async (p: Product[]) => {
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

    const addProductToCart = (p: ProductCart[]) => {
        dispatch({type:'addProductsCart', payload: p})
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
            selectStore
        }}>
            {children}
        </TodoContext.Provider>
    
)}