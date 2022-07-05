import {useState, useEffect, useContext} from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';

import { CartStyle } from './style';
import CardCart from './Component/CardCart';

import { TodoContext } from '../../../Context/Context';
import axios from 'axios';



const Cart = () => {
    const mercadopago = useMercadopago.v2('TEST-f8c59de6-e8ea-48fe-9a9f-700c98d5db77', {
        locale: "es-AR"
    });
    const [total, setTotal] = useState(0);
    const {todoState, updateProductCart} = useContext(TodoContext);
    const {productsCart} = todoState;

    useEffect(() => {
        const totalHandler = () => {
            let sum = 0;
            console.log(productsCart)
            for(let i =0; i < productsCart.length; i++){
                sum = sum +  parseFloat(productsCart[i].product.precio as string)
            }
    
            setTotal(sum)
        }

        totalHandler()
    }, [productsCart, updateProductCart])
    
    const handlePayer = async () => {

        try {
            const resMP = await axios.post("http://localhost:3001/mercadopago/checkout", productsCart);
            console.log(resMP)
            const idReference = resMP.data.body.id;

            if(mercadopago){
                mercadopago?.checkout({
                    preference: {
                        id: idReference,
                    },
                    autoOpen: true, // Habilita la apertura automática del Checkout Pro
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
            <CartStyle>
                <div>
                <div>
                    Carrito
                </div>

                <div>
                    {productsCart.map((e) => <CardCart product={e}/>)}
                </div>

                <div>
                    total: {total}
                    <button onClick={handlePayer}>Pagar</button>
                </div>
                </div>
                
            </CartStyle>
    )
}

export default Cart;