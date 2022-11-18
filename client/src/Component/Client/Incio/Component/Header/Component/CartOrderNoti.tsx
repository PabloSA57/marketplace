import React, { useContext, useRef, useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { CartLogoStyle } from './style';
import { AiOutlineDown } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../../../../../../Context/Context';
import { IoExitOutline } from "react-icons/io5";
import { BiDetail } from 'react-icons/bi';


interface Prop {
    type: string
}
const CartOrderNoti = ({type}: Prop) => {
    const navigate = useNavigate();
    const {todoState, setStateDrawer} = useContext(TodoContext);
    const {productsCart} = todoState;
    console.log(productsCart)

    return (
            <CartLogoStyle >
                <div className='cart'>
                    { type === 'cart' && <>
                    <div 
                        onClick={() => navigate('/inicio/cart')} 
                        className='carritonoti'>
                            <span className='lenght'>{productsCart.length}</span>
                    </div>
                    <IoCartOutline />
                    </>}
                    { type === 'order' && <>
                    <div
                        onClick={() => setStateDrawer({noti:true, order:false})}
                        className='carritonoti'>
                            <span className='lenght'>{productsCart.length}</span>
                    </div>
                    <BiDetail />
                    </>}
                </div>

                {/*  */}
            </CartLogoStyle>
    )
}

export default CartOrderNoti;
