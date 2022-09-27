import React, { useContext, useState} from 'react'
import { TodoContext } from '../../../../../../Context/Context';
import { Product, ProductInfo } from '../../../../../../Interface/Commerce';

import {CardProductStyle} from './style';

interface Prop {
    producto: ProductInfo,
    funcSelect: (s: number) => void,
    searchId: (id: number) => void,
    found: boolean,
   // selectCard: number
}

const CardProduct = ({producto, funcSelect, searchId, found}: Prop) => {

    const [selectCard, setSelectCard] = useState(0);
    //console.log(allproductos)
    console.log(selectCard)
    return (
        <CardProductStyle 
        onClick={() => {
            funcSelect(producto.product.id)
            searchId(producto.product.id)
            setSelectCard(producto.product.id)
        }}
        activeSelect={selectCard === producto.product.id ? "orange" : null}
        >
            <div className='con'>
                <div className='conimg'>
                    <img src={producto.product.imgurl} alt="" />
                </div>
                
                <div className='con1'>
                    <div>
                        <span className='text-cat'>{producto.product.categoria}</span>
                    </div>
                    <div>
                        <span className='text-nam'>{producto.product.name}</span>
                    </div>
                </div>
            </div>
        </CardProductStyle>
    )
}

export default CardProduct;