import React, { useContext, useState} from 'react'
import { TodoContext } from '../../../../../../Context/Context';
import { Product } from '../../../../../../Interface/Commerce';

import {CardProductStyle} from './style';

interface Prop {
    producto: Product,
    funcSelect: (s: number) => void,
    searchId: (id: number) => void,
    found: boolean,
   // selectCard: number
}

const CardProduct = ({producto, funcSelect, searchId, found}: Prop) => {
    const {todoState} = useContext(TodoContext);
    const {allproducts} = todoState;

    const [selectCard, setSelectCard] = useState(0);
    //console.log(allproductos)
    console.log(selectCard)
    return (
        <CardProductStyle 
        onClick={() => {
            funcSelect(producto.id)
            searchId(producto.id)
            setSelectCard(producto.id)
        }}
        activeSelect={selectCard === producto.id ? "orange" : null}
        >
            <div className='con'>
                <div className='conimg'><img src={producto.imgurl} alt="" /></div>
                <div className='con1'>
                    <div>
                        <span className='text-cat'>{producto.categoria}</span>
                    </div>
                    <div>
                        <span className='text-nam'>{producto.name}</span>
                    </div>
                </div>
            </div>
        </CardProductStyle>
    )
}

export default CardProduct;