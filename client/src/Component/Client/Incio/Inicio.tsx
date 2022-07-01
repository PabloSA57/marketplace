import React from 'react'
import Commerce from './Component/Commerce/Commerce';
import Header from './Component/Header/Header';
import Presentation from './Component/Presentation/Presentation';
import Products from './Component/Products/Products';

const Inicio = () => {
    return (
        <div>
            <Header />
            <Presentation />
            <Commerce />
            <Products />
        </div>
    )
}

export default Inicio;
