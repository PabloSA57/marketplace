import {useContext} from "react";

import {HeaderStyle} from './style';

import {Link} from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5';
import { AiOutlineDown } from "react-icons/ai";
import { GoSearch } from "react-icons/go";

import Cart from "./Component/CartOrderNoti";
import { TodoContext } from "../../../../../Context/Context";
import CartOrderNoti from "./Component/CartOrderNoti";
import { Avatar } from "@mui/material";
import { AvatarComponent } from "./Component/Avatar";



export default function Header() {
    const {todoState, updateTipo} = useContext(TodoContext);
    const {widthPhone} = todoState;

    console.log(widthPhone)
    return (
        <HeaderStyle>
            <div className='con'>
                <div><a href="/inicio">Logo</a></div>
                {widthPhone ? <div></div>
                :<div className="coninput">
                <input type='text' placeholder='Buscar Productos...'/>
                <button>
                    <div className='search'>
                        <GoSearch />
                    </div>
                </button>
            </div>
                }

                <nav className="order-cart-noti">
                    {true ? <CartOrderNoti type='cart'/>
                    :<></>
                    }
                    {true ? <CartOrderNoti type='order'/>
                    :<></>
                    }

                    <AvatarComponent name='Ruben' lastname="Sierra"/>
                </nav>



                {!true ? <div className='btnrorl'>
                    <button className='btnlogin'>Login</button>
                    <button className='btnregister'>Register</button>
                </div>
                :null
                }
            </div>
            
        </HeaderStyle>
    )
}
