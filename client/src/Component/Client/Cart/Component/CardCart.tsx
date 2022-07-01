import { Product } from '../../../../Interface/Commerce';
import { CardCartProductStyle } from './style';

import cp from './cartproduct.module.css'


interface Prop {
    product: Product
}

const CardCart = ({product}: Prop) => {
    
    return (
            <CardCartProductStyle>
                <article className="con">
                    <div className={"con1"}>
                        <div className={"imgdiv"}>
                            <img src={"imgurl"} alt="" />
                        </div>
                        <div>
                                <span>{product.name} pablo</span>
                        </div>
                    </div>
                    
                    <div className={"con12"}>
                        
                        <div>
                            <select name="" id="">
                                <option value="">1kg</option>
                            </select>
                        </div>

                        <div>
                            <span>$ {product.precio}</span>
                        </div>
                    </div>
                </article>
            </CardCartProductStyle>
    )
}

export default CardCart;