import React, { useContext, useRef, useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { CartLogoStyle } from './style';
import { AiOutlineDown } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../../../../../../Context/Context';
import { IoExitOutline } from "react-icons/io5";

interface Prop {
    precio: string,
}

const Cart = ({precio}: Prop) => {
    const [active, setActive] = useState<boolean>(false);
    const navigate = useNavigate();
    const {todoState} = useContext(TodoContext);
    const {productsCart} = todoState;
    const divmas = useRef<HTMLHeadingElement>(null);
    console.log(productsCart)

    const handleMas = () => {
        if(!active){
            divmas.current?.style.removeProperty('display')
            setActive(!active)
        }else{
            divmas.current?.style.setProperty('display', 'none')
            setActive(!active)
        }
        
    }

    return (
            <CartLogoStyle >
                <div className='cart'>
                    <div 
                    onClick={() => navigate('/inicio/cart')} 
                    className='carritonoti'>
                        <span className='lenght'>{productsCart.length}</span>
                    </div>
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

                <div className='mas' onClick={handleMas}>
                    <AiOutlineDown />
                </div>

                <div className='menu-desple' ref={divmas} style={{display:'none'}}>
                    <div className='menu-desple1'>
                        <div className='menu-desple2'>
                        <IoExitOutline /> <span>Cerrar sesion</span> 
                        </div>
                    </div>
                </div>
            </CartLogoStyle>
    )
}

export default Cart;
