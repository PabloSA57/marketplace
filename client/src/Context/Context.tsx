import {createContext} from "react";
import {State} from "../Interface/State";
import {Product, Commerce, ProductCart} from "../Interface/Commerce";


export type TodoContextProps = {
    todoState: State;
    
    getProductos: (p: Product[]) => void;
    updateProducto: (id: number, precio: string | undefined, stock: string | null | undefined) => void;
    deleteProduct: (id: number) => void;
    updateTipo: (tipo: string) => void;
    getComercios: (c: Commerce[]) => void;
    selectStore: (id: number) => void;
    changeWidth: (b: boolean) => void;
    loginAuth: (type:string | null, token:string | null) => void;
    addProductToCart: (p: ProductCart[]) => void;

}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);