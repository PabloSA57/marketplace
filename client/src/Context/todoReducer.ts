import { State } from '../Interface/State';
import { Product, Commerce, ProductInfo } from '../Interface/Commerce';

type TodoAction = 
    |{type: 'getProductos', payload: ProductInfo[]}
    |{type: 'filterTipo', payload: string}
    |{type: 'getComercios', payload: Commerce[]}
    |{type: 'changePhone', payload: boolean}
    |{type: 'token', payload: string | null}
    |{type: 'type', payload: string | null}
    |{type: 'getProductsComercio', payload: ProductInfo[]}
    |{type: 'addProductsCart', payload: ProductInfo[]}
    |{type: 'addProductsCartCopy', payload: ProductInfo[]}
    |{type: 'addProductCart', payload: ProductInfo}
    |{type: 'updateProductCart', payload: {id:number, newprecio: number}}
    |{type: 'deleteProductCart', payload: number}

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
            const filterTipo = tipo === "All"  ? allproducts : allproducts.filter(e => e.product.categoria === tipo);
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
            product[0].product.precio = action.payload.precio;
            product[0].product.stock = action.payload.stock;
            return {
                ...state,
                products: product
            }
        case "deleteProduct":
            return {
                ...state,
                products: state.products.filter(e => e.id !== action.payload)
            }
        case "addProductsCart":
            
            return {
                ...state,
                allproductsCart: action.payload                                             
            }
        case "addProductsCartCopy":
                const arra = [] as ProductInfo[];

                action.payload.forEach(e =>arra.push(
                    {id:e.id, 
                    product:{
                        id:e.product.id,
                        name:e.product.name,
                        categoria: e.product.categoria,
                        precio: e.product.precio,
                        imgurl: e.product.imgurl,
                        unit: e.product.unit,
                    }, 
                    almacen:{
                        id:e.almacen.id,
                        name: e.almacen.name
                    }}));
            return {
                ...state,
                productsCart: arra                                             
                }
        case "addProductCart":
            return {
                ...state,
                productsCart: [...state.productsCart, action.payload]
            }
        case "updateProductCart":
            const productsCart = state.productsCart;
            const newprecio = action.payload.newprecio.toString();
            const productCart = productsCart.filter(e => e.id === action.payload.id);
            productCart[0].product.precio = newprecio;
            //const productos = Searchproducto? Searchproducto?.product?.precio = toString(action.payload?.newprecio) : producto;

            return {
                ...state,
                productsCart: productsCart

            }
            case "deleteProductCart":
                const productsCartTwo = state.productsCart;
                const notDeleteproductCart = productsCartTwo.filter(e => e.id !== action.payload);
    
                return {
                    ...state,
                    productsCart: notDeleteproductCart
    
                }
        case "selectStore":

            return {
                ...state,
                store_select: action.payload
            }
    }
}