import React from 'react'
import Footer from '../../General/Footer/Footer';
import Commerce from './Component/Commerce/Commerce';
import Header from './Component/Header/Header';
import Presentation from './Component/Presentation/Presentation';
import Products from './Component/Products/Products';

const Inicio = () => {
    return (
        <main>
            <Header />
            <Presentation />
            <Commerce />
            <Products />
            <Footer />
        </main>
    )
}

export default Inicio;
