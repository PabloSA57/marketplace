import {  useContext, useEffect, useState } from 'react';

import { ProductsStyle } from './style';



import axios from 'axios';
import { TodoContext } from '../../../../../Context/Context';
import { CardProduct } from './Component/CardProduct';
import { Text } from '../../../../../styles/style.general';
let productos = [{
    id: 1,
    name: "Tomate",
    imgurl: "https://static4.depositphotos.com/1017505/320/i/600/depositphotos_3201839-stock-photo-three-tomatoes.jpg",
    categoria: "Verduras",
    almacen: "Las Sierras",
    precio: "100",
    descripcion: "Tomate"
},
{
    id: 2,
    name: "Bananas",
    imgurl: "http://camabana.com/img/header/bananas.jpg",
    categoria: "Frutas",
    almacen: "Las Sierras",
    precio: "100",
    descripcion: "Tomate"
},
{
    id: 3,
    name: "Pera",
    imgurl: "http://camabana.com/img/header/bananas.jpg",
    categoria: "Frutas",
    almacen: "Las Sierras",
    precio: "100",
    descripcion: "Tomate"
},  
{
    id: 4,
    name: "Bananas",
    imgurl: "http://camabana.com/img/header/bananas.jpg",
    categoria: "Frutas",
    almacen: "Las Sierras",
    precio: "100",
    descripcion: "Tomate"

},
{
    id: 5,
    name: "Pera",
    imgurl: "http://camabana.com/img/header/bananas.jpg",
    categoria: "Frutas",
    almacen: "Las Sierras",
    precio: "100",
    descripcion: "Tomate"

}

]


    const arrTipo = ["All", 'Verduras', 'Frutas', 'Bebidas', 'Golosinas', 'Otros'];
    const Products = () => {
        const [active, setActive] = useState('All')
        const {todoState, updateTipo, getProductos} = useContext(TodoContext);
        const {store_select} = todoState;
        const {products} = todoState;

        

        const handlerTipo = (name: string) => {
            updateTipo(name)
            setActive(name)
        }
        useEffect(() => {
            if(store_select){
                const getProductStore = async () => {
                    try {
                        const product = await axios.get('http://localhost:3001/product-store/getproductstore/' + store_select);
                        console.log(product.data);
                        getProductos(product.data)
                    } catch (error) {
                        console.log(error)
                    }
                    
                }
    
                getProductStore();
            }
            
        }, [store_select])   

    return (
            <ProductsStyle >
                
                    <div className='div-row'>
                        <div>
                            <Text size='20px' weight='520' lineheight='20px'>  
                                Productos
                            </Text>
                        </div>
                        <div className="filt">
                            {arrTipo.map(e => 
                            <Text 
                            onClick= {() => handlerTipo(e)}
                            color={active === e ? 'orange' : null}
                            size='14px' 
                            weight='400' 
                            lineheight='20px' 
                            cursor='pointer'>
                                {e}
                            </Text>)}

                        </div>
                    </div>
                    
                <section className='contain'>
                    {products.length > 0 ?products?.map(p => <CardProduct product={p}/>) : <h2>No hay productos</h2>}
                </section>
            </ProductsStyle>
        
    )
}

export default Products;
