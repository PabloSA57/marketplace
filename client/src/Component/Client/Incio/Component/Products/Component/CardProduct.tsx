
import { CardProductStyle} from "./stylec";
import { IoCartOutline } from 'react-icons/io5';
import { useContext, useState } from "react";

import axios from "axios";
import { TodoContext } from "../../../../../../Context/Context";
import { Product, ProductInfo } from "../../../../../../Interface/Commerce";
import { Text } from "../../../../../../styles/style.general";
interface Prop {
    product: ProductInfo
}

export const CardProduct = ({product}: Prop) => {
    const [loader , setLoader] = useState(false);
    const {todoState, addProductCart} = useContext(TodoContext);
    const {productsCart} = todoState;

    const addProductsToCart = async (product: ProductInfo) => {
        
        console.log(product)
        console.log(productsCart)
            setLoader(true);
            const bool =  productsCart.some(e => e.product.id === product.id);
            console.log(bool)
            if(!bool ){
                try {
                    const addCart =await axios.post('http://localhost:3001/cart/addtocart', 
                    {
                        idCliente: "ff48f3fc-cf4e-4fc3-8b35-51cd7e860b8f",
                        idProductos: [product.id]
                    })
                    addProductCart(product)
                    setLoader(false)
                    console.log(addCart)
                } catch (error) {
                    
                    console.log(error)
                }
                
            
            }else{
                setLoader(false)
                alert('producto ya agregado')
            }
    }

    console.log(product.product.imgurl)
    return (
        <CardProductStyle>
            <div className='con'>
                <div className='conimg'><img src={product.product.imgurl} alt="" /></div>
                <div className='con1'>
                    <div>
                        <Text size='12px' weight='400' lineheight='15px'>
                            {product.product.categoria}

                        </Text>
                    </div>
                    <div>
                        <Text size='16px' weight='600' lineheight='20px'>
                            {product.product.name}
                        </Text>
                    </div>
                </div>

                <div className='con2'>
                    <div>
                        <Text size='16px' weight='600' lineheight='20px' color='#FFB531'>
                            {`$${product.product.precio}`}
                        </Text>
                    </div>
                    <button onClick={ () => addProductsToCart(product)}>
                        {!loader ?<><IoCartOutline /> "Add"</>  : "agregando.."}
                    </button>
                </div>
            </div>

        </CardProductStyle>
        
    
)
}
