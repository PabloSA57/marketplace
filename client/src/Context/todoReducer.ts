import { State } from '../Interface/State';
import { Product, Commerce, ProductCart } from '../Interface/Commerce';

type TodoAction = 
    |{type: 'getProductos', payload: Product[]}
    |{type: 'filterTipo', payload: string}
    |{type: 'getComercios', payload: Commerce[]}
    |{type: 'changePhone', payload: boolean}
    |{type: 'token', payload: string | null}
    |{type: 'type', payload: string | null}
    |{type: 'getProductsComercio', payload: Product[]}
    |{type: 'addProductsCart', payload: ProductCart[]}
    |{type: 'updateProducto', payload: {id: number, precio: string | undefined, stock: string | null | undefined}}
    |{type: 'deleteProduct', payload: number}
    |{type: 'selectStore', payload: number}

export const todoReducer = (state: State, action: TodoAction): State => {

    switch (action.type){
        case "getProductos":
            return {
                ...state,
                allproducts: action.payload,
                products: action.payload
            }
        case "filterTipo":
            const allproducts = state.allproducts;
            const tipo = action.payload;
            const filterTipo = tipo === "All"  ? allproducts : allproducts.filter(e => e.categoria === tipo);
            return{
                ...state,
                products: filterTipo
                }
        case "getComercios":
            return {
                ...state,
                commerce: action.payload
            }
        case "changePhone":
            return {
                ...state,
                widthPhone: action.payload
            }
        case "token":
            return {
                ...state,
                jwtToken: action.payload
            }
        case "type":
            return {
                ...state,
                currentType: action.payload
            }
        case "getProductsComercio":
            return {
                ...state,
                products_commerce: action.payload
            }
        case "updateProducto":
            const products = state.products;
            const product = products.filter(e => e.id === action.payload.id);
            product[0].precio = action.payload.precio;
            product[0].stock = action.payload.stock;
            return {
                ...state,
                products: products
            }
        case "deleteProduct":
            return {
                ...state,
                products: state.products.filter(e => e.id !== action.payload)
            }
        case "addProductsCart":
            //const newProduct = action.payload;
            //const bool = state.productCart.find(e => e.id === newProduct.id);
            //const product = bool ?  state.productCart : [...state.productCart,action.payload];
            
            return {
                ...state,
                productsCart: action.payload                                                
            }
        case "selectStore":
            return {
                ...state,
                store_select: action.payload
            }
    }
}