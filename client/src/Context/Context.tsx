import {createContext} from "react";
import {State} from "../Interface/State";
import { Commerce, ProductInfo} from "../Interface/Commerce";



export type TodoContextProps = {
    todoState: State;
    
    getProductos: (p: ProductInfo[]) => void;
    updateProducto: (id: number, precio: string | undefined, stock: string | null | undefined) => void;
    deleteProduct: (id: number) => void;
    updateTipo: (tipo: string) => void;
    getComercios: (c: Commerce[]) => void;
    selectStore: (id: number) => void;
    changeWidth: (b: boolean) => void;
    loginAuth: (type:string | null, token:string | null) => void;
    addProductToCart: (p: ProductInfo[]) => void;
    addProductToCartCopy: (p: ProductInfo[]) => void;
    addProductCart: (p: ProductInfo) => void;
    updateProductCart: (obj: {id: number, newprecio: number}) => void;
    deleteProductCart: (id: number) => void;

}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);