import React, { useContext } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { CartLogoStyle } from './style';
import { AiOutlineDown } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../../../../../../Context/Context';

interface Prop {
    precio: string,
}

const Cart = ({precio}: Prop) => {
    const navigate = useNavigate();
    const {todoState} = useContext(TodoContext);
    const {productsCart} = todoState;
    console.log(productsCart)

    return (
            <CartLogoStyle >
                <div>
                    <div onClick={() => navigate('/inicio/cart')} className='carritonoti'>{productsCart.length}</div>
                    <IoCartOutline />
                </div>
                <div className='concarritoprecio'>
                    <div className='carritoprecio'>
                        <span className='name'>
                            Mi carrito
                        </span>
                    </div>
                    
                    <div className='carritoprecio'>
                        <span className='precio'>
                            $ {precio}
                        </span>
                    </div>
                </div>

                <div className='mas'>
                    <AiOutlineDown />
                </div>
            </CartLogoStyle>
    )
}

export default Cart;
