import { State } from '../Interface/State';
import { Product, Commerce, ProductInfo, Order } from '../Interface/Commerce';
import { User } from '../Interface/User';

type TodoAction = 
    |{type: 'getProductos', payload: ProductInfo[]}
    |{type: 'getProductToAdd', payload: Product[]}
    |{type: 'setCurrentUser', payload: User}
    |{type: 'filterTipo', payload: string}
    |{type: 'searchProduct', payload: string}
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
    |{type: 'getStoreCart', payload: Commerce[]}
    |{type: 'selectStoreCart', payload: number}     
    |{type: 'addProductCart', payload: ProductInfo}
    |{type: 'updateProducto', payload: {id: number, precio: string | undefined, stock: string | null | undefined}}
    |{type: 'deleteProduct', payload: number}
    |{type: 'selectStore', payload: number}
    |{type: 'setCommerce', payload: Commerce}
    |{type: 'setHasStore', payload: boolean}
    |{type: 'getOrders', payload:Order[]}
    |{type: 'filterOrders', payload:string}


export const todoReducer = (state: State, action: TodoAction): State => {

    switch (action.type){
        case "setCurrentUser":
            return {
                ...state,
                currentUser: action.payload
            }
        case "getProductos":
            return {
                ...state,
                allproducts: action.payload,
                productInfo: action.payload
            }
            case "getProductToAdd":
                return {
                    ...state,
                    products: action.payload
                }
        case "filterTipo":
            const allproducts = state.allproducts;
            const tipo = action.payload;
            const filterTipo = tipo === "All"  ? allproducts : allproducts?.filter(e => e.product.categoria === tipo);
            return{
                ...state,
                productInfo: filterTipo as ProductInfo[] 
                }
        case "searchProduct":
            const productI = state.productInfo;
            
            //filtrar productos que comience con lo que manda
            const filterName = productI.filter(e => e.product.name === action.payload)
            return {
                ...state,
                productInfo: filterName as ProductInfo[]
            }
        case "setCommerce":
            return {
                ...state,
                mycommerce: action.payload
            }

        case "setHasStore":
            return {
                ...state,
                hasStore: action.payload
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
            const products = state.productInfo;
            const product = products?.filter(e => e.id === action.payload.id);
            if(product !== undefined && product?.length > 0){
                product[0].product.precio = action.payload.precio;
                product[0].product.stock = action.payload.stock;
            }
            
            return {
                ...state,
                productInfo: product as ProductInfo[]
            }
        case "deleteProduct":
            return {
                ...state,
                productInfo: state.productInfo?.filter(e => e.id !== action.payload) as ProductInfo[]
            }
        case "getStoreCart":
            return {
                ...state,
                storeCart: action.payload
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
                        id:e.almacen?.id as number,
                        name: e.almacen?.name as string
                    }}));
            return {
                ...state,
                productsCart: arra                                             
                }
        case "selectStoreCart":
            const pro = state.productsCart;
            console.log('procart: ',pro)
            console.log("Treducer", action.payload)
            const filterProduct = pro.filter(e => e.almacen?.id === action.payload);
            return {
                ...state,
                productCartStore: filterProduct
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
                const productsCartTwo = state.productCartStore;
                const notDeleteproductCart = productsCartTwo.filter(e => e.id !== action.payload);
    
                return {
                    ...state,
                    productCartStore: notDeleteproductCart
    
                }
        case "selectStore":

            return {
                ...state,
                store_select: action.payload
            }
        case "getOrders":

            return {
                ...state,
                allorders: action.payload,
                orders: action.payload,
                
            }
        case "filterOrders":
            const allorders = state.allorders;
            const filter = action.payload
            console.log(filter)
            const filterOrders = filter === "All"  ? allorders : allorders?.filter(e => e.state === filter);
            console.log(filterOrders)
            return {
                ...state,
                orders: filterOrders
            }
    }
}