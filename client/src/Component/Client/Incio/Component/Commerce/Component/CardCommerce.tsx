import { CardCommerceStyle } from "./style";
import { useState } from "react";
import cc from './cardcomercio.module.css';
import { Text } from "../../../../../../styles/style.general";
import { Commerce } from "../../../../../../Interface/Commerce";


interface Prop {
    Comercio: Commerce;
    Func: (id:number) => void;
    active: number
}
    const CardCommerce = ({Comercio, Func, active}: Prop) => {
        console.log('render')
        console.log(active)
    return (
        <CardCommerceStyle onClick={() => Func(Comercio.id)} activeColor={active === Comercio.id ? "#ffb331e5" : null}>
            <div className="con">
                <div className="conimg">
                    <img src={Comercio.img} alt="" />
                </div>

                <div>
                    
                    <Text size='12px' weight='200'>
                        Tucuman
                    </Text>
                    <Text size='14px' weight='500'>
                        {Comercio.name}
                    </Text>
                </div>
                
            </div>
            
            
        </CardCommerceStyle>
    )
    }

export default CardCommerce;
