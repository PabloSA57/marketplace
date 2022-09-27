import {  useContext, useEffect, useState } from 'react';

import { ProductsStyle } from './style';



import axios from 'axios';
import { TodoContext } from '../../../../../Context/Context';
import { CardProduct } from './Component/CardProduct';
import { Text } from '../../../../../styles/style.general';


    const arrTipo = ["All", 'Verduras', 'Frutas', 'Bebidas', 'Golosinas', 'Otros'];
    const Products = () => {
        const [active, setActive] = useState('All')
        const {todoState, updateTipo, getProductos} = useContext(TodoContext);
        const {store_select} = todoState;
        const {productInfo} = todoState;

        console.log(productInfo)

        const handlerTipo = (name: string) => {
            updateTipo(name)
            setActive(name)
        }
        useEffect(() => {
            if(store_select){
                const getProductStore = async () => {
                    try {
                        const product = await axios.get('http://localhost:3001/product-store/getproductstore/' + store_select);
                        console.log(product);
                        getProductos(product.data)
                    } catch (error) {
                        console.log(error)
                    }
                    
                }
    
                getProductStore();
            }
            
        }, [store_select])   

        const pruebaSession = (obj: any) => {
        
            window.sessionStorage.setItem('prueba', JSON.stringify(obj))
        }
        pruebaSession({s:"s"})
        
    return (
            <ProductsStyle >
                
                    <div className='div-row'>
                        <div>
                            <Text size='20px' weight='520' lineheight='20px' color='#253D4E'>  
                                Productos
                            </Text>
                        </div>
                        <div className="filt">
                            {arrTipo.map(e => 
                            <Text 
                            onClick= {() => handlerTipo(e)}
                            color={active === e ? 'orange' : '#253D4E'}
                            size='14px' 
                            weight='400' 
                            lineheight='20px' 
                            cursor='pointer'>
                                {e}
                            </Text>)}

                        </div>
                    </div>
                    
                <section className='contain'>
                    {productInfo.length > 0 ?productInfo?.map(p => <CardProduct product={p}/>) : <h2>No hay productos</h2>}
                </section>
            </ProductsStyle>
        
    )
}

export default Products;
