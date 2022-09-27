import React from 'react'
import { Product } from '../../../../Interface/Commerce'
import { CardBestProductsStyle } from './style.cp'

type bestProductI = {
    sumQuan: number,
    product: Product
}

type Prop = {
    bestProduct: bestProductI,
    index: number
}
const CardProduct = ({bestProduct, index}: Prop ) => {
    return (
            <CardBestProductsStyle>
                <div>
                    {`#${index + 1}`}
                </div>
                <div className='cp-img'>
                    <img src={bestProduct.product.imgurl} alt="product" />
                </div>

                <div>
                    <span>{bestProduct.product.name}</span>
                </div>
            </CardBestProductsStyle>
        )
}

export default CardProduct