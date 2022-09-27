
import { CardProductStyle} from "./stylec";
import { IoCartOutline } from 'react-icons/io5';
import { useContext, useState } from "react";

import axios from "axios";
import { TodoContext } from "../../../../../../Context/Context";
import { Product, ProductInfo } from "../../../../../../Interface/Commerce";
import { Text } from "../../../../../../styles/style.general";
import { useSesionStorage } from "../../../../../../hooks/useSesionStorage";
interface Prop {
    product: ProductInfo
}

export const CardProduct = ({product}: Prop) => {
    const {set} = useSesionStorage('productscart');
    const [loader , setLoader] = useState(false);
    const {todoState, addProductCart} = useContext(TodoContext);
    const {productsCart, currentUser} = todoState;
    console.log(productsCart)
    const addProductsToCart = async (p: ProductInfo) => {
        
        console.log(productsCart)
        console.log(p)
            setLoader(true);
            const bool =  productsCart.some(e => e.id === p.id);
            console.log(bool)
            if(!bool ){
                /*try {
                    const addCart =await axios.post('http://localhost:3001/cart/addtocart', 
                    {
                        idCliente: currentUser?.id,
                        idProductos: [p.id]
                    })
                    addProductCart(product)
                    setLoader(false)
                    console.log(addCart)
                } catch (error) {
                    
                    console.log(error)
                }**/
                set(product)
                addProductCart(product)
                setLoader(false)
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
                        <Text size='12px' weight='400' lineheight='15px' color='#ADADAD'>
                            {product.product.categoria}

                        </Text>
                    </div>
                    <div>
                        <Text size='16px' weight='600' lineheight='20px' color='#253D4E'>
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
                        {!loader ?<><IoCartOutline /> Add</>  : "agregando.."}
                    </button>
                </div>
            </div>

        </CardProductStyle>
        
    
)
}
