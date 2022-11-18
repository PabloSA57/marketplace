import React, { useContext, useState } from 'react'
import { TodoContext } from '../../../Context/Context';
import Footer from '../../General/Footer/Footer';
import Commerce from './Component/Commerce/Commerce';
import Header from './Component/Header/Header';
import Order from './Component/Order/Order';
import Presentation from './Component/Presentation/Presentation';
import Products from './Component/Products/Products';

const Inicio = () => {

    return (

        <div>
            
            <Presentation />
            <Commerce />
            <Products />
            <Order />
        
        </div>
    )
}

export default Inicio;
