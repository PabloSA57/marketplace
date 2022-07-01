import {useState, useEffect, useContext} from 'react';

import { CartStyle } from './style';
import CardCart from './Component/CardCart';
import tomate from '../../public/tomate-png.png';
import { TodoContext } from '../../../Context/Context';
import { Product } from '../../../Interface/Commerce';
const obj = [
    {
        id: 1,
        name: 'Tomates',
        imgurl: tomate,
        categoria: 'verduras',
        almacen: 'Las sierras',
        precio: '100',
        descripcion: "Tomate"

    },
    {
        id: 2,
        name: 'Tomates',
        imgurl: tomate,
        categoria: 'verduras',
        almacen: 'Las sierras',
        precio: '100',
        descripcion: "Tomate"

    },
]

const Cart = () => {
    const {todoState} = useContext(TodoContext);
    const {productsCart} = todoState;
    const [allproductos, setAllProductos] = useState<Product[]>([])

    useEffect(() => {
        setAllProductos(obj)
    }, [])
    return(
            <CartStyle>
                <div>
                <div>
                    Carrito
                </div>

                <div>
                    {allproductos.map((e) => <CardCart product={e}/>)}
                </div>

                <div>
                    total
                    <button>Pagar</button>
                </div>
                </div>
                
            </CartStyle>
    )
}

export default Cart;