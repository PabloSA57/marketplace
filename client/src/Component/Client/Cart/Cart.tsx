import {useState, useEffect, useContext} from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';

import { CartStyle } from './style';
import CardCart from './Component/CardCart';

import { TodoContext } from '../../../Context/Context';
import { Button, Text } from '../../../styles/style.general';
import { FormCart } from './FormCart';
import { Commerce } from '../../../Interface/Commerce';
import { useCart } from '../../../hooks/useCart';
import ProcesOrder from './Component/ProcesOrder/ProcesOrder';




const Cart = () => {
    const {active,total, handleStore} = useCart()    
    
    const {todoState, setStateDrawer} = useContext(TodoContext);
    const {productsCart, storeCart, productCartStore} = todoState;

    console.log('active', active)
    console.log(total)
    /*const [typePayment, setTypePayment] = useState<'mp' | 'cash' | null>(null)
    const [open, setOpen] = useState(false);
    
    console.log(storeCart)

    const handleOpen = (type: 'mp' | 'cash') => {
        setOpen(true) 
        setTypePayment(type)};

    const handleClose = () => {
        setOpen(false)
        window.location.reload()
    };*/


    return(
            <CartStyle>
                <div>
                <div>
                    Carrito
                </div>

                <div>

                    {storeCart?.map(e =>  
                        <Text
                        onClick= {() => handleStore(e)}
                            color={active?.id === e.id ? 'orange' : '#253D4E'}
                            size='14px' 
                            weight='400' 
                            lineheight='20px' 
                            cursor='pointer'
                        >
                            {e.name}
                        </Text>
                    )}
                    
                </div>
                <div>
                    {productCartStore.map((e) => <CardCart product={e}/>)}
                </div>

                    <div className='con-pago'>
                        <div className='con-pago1'>
                            <div className='total'>
                                <p className='text-total'>Total</p>
                                <span className='text-total'>${total}</span>
                            </div>
                            
                                <Button 
                                    width='100%' 
                                    height='2.5em' 
                                    colortext='#ffffff' 
                                    onClick={() => setStateDrawer({noti: false, order: true})}
                                >
                                    Procesar
                                </Button>
                        </div>
                    </div>
                </div>
                
               {/* <FormCart 
                    open={open} 
                    handleClose={handleClose}
                    typePayment={typePayment}
                    productsCart={productsCart}
                    amount={total}
                    store={active}
                    />*/}
            <ProcesOrder 
                store={active }
                amount={total}
                productsCart={productsCart}
            />
            
            </CartStyle>
    )
}

export default Cart;