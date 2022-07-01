
import { CardProductStyle} from "./stylec";
import { IoCartOutline } from 'react-icons/io5';
import { useContext } from "react";

import axios from "axios";
import { TodoContext } from "../../../../../../Context/Context";
import { Product } from "../../../../../../Interface/Commerce";
import { Text } from "../../../../../../styles/style.general";
interface Prop {
    product: Product
}

export const CardProduct = ({product}: Prop) => {
    const {addProductToCart} = useContext(TodoContext);


    const addProductsToCart = async (product: Product) => {
        //addProductToCart(producto)
    }
    return (
        <CardProductStyle>
            <div className='con'>
                <div className='conimg'><img src={product.imgurl} alt="" /></div>
                <div className='con1'>
                    <div>
                        <Text size='12px' weight='400' lineheight='15px'>
                            {product.categoria}

                        </Text>
                    </div>
                    <div>
                        <Text size='16px' weight='600' lineheight='20px'>
                            {product.name}
                        </Text>
                    </div>
                </div>

                <div className='con2'>
                    <div>
                        <Text size='16px' weight='600' lineheight='20px' color='#FFB531'>
                            {`$${product.precio}`}
                        </Text>
                    </div>
                    <button onClick={ () => addProductsToCart(product)}>
                        <IoCartOutline /> Add
                    </button>
                </div>
            </div>

        </CardProductStyle>
        
    
)
}
