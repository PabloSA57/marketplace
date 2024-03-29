import {createContext} from "react";
import {State} from "../Interface/State";
import { Commerce, ProductInfo, Product, Order} from "../Interface/Commerce";
import { User } from "../Interface/User";



export type TodoContextProps = {
    todoState: State;
    
    setCurrentUser: (u: User) => void;
    getProductos: (p: ProductInfo[]) => void;
    getProductToAdd: (p: Product[]) => void;
    updateProducto: (id: number, precio: string | undefined, stock: string | null | undefined) => void;
    deleteProduct: (id: number) => void;
    updateTipo: (tipo: string) => void;
    searchProduct: (name: string, type: string) => void;
    getComercios: (c: Commerce[]) => void;
    selectStore: (id: number) => void;
    changeWidth: (b: boolean) => void;
    loginAuth: (type:string | null, token:string | null) => void;
    addProductToCart: (p: ProductInfo[]) => void;
    addProductToCartCopy: (p: ProductInfo[]) => void;
    addProductCart: (p: ProductInfo) => void;
    getStoreCart: (c: Commerce[]) => void;
    selectStoreCart: (id: number) => void;
    updateProductCart: (obj: {id: number, newprecio: number}) => void;
    deleteProductCart: (id: number) => void;
    //Notification
    filterNotication: (obj: {state?: string, fecha?: string, pay?: string}) => void;
    setCommerce: (c: Commerce) => void;
    setHasStore : (b: boolean) => void;
    //Orders
    setOrder: (o: Order[]) => void;
    filterOrders: (f: string) => void;
    //setsocket
    setSocket: (socket: any) => void;
    //Drawer
    setStateDrawer: ({noti, order}: {noti:boolean, order:boolean}) => void;
}

export const 
TodoContext = createContext<TodoContextProps>({} as TodoContextProps);