import { ProductInfo } from '../../../../Interface/Commerce';
import { CardCartProductStyle } from './style';

import { useContext, useEffect, Suspense, useState } from 'react';
import { TodoContext } from '../../../../Context/Context';
import DialogC from '../../../Commerce/Edit/Component/Component/Dialog';
import axios from 'axios';


interface Prop {

    product: ProductInfo
}
const CardCart = ({product}: Prop) => {
    const [open, setOpen] = useState<boolean>(false);
    const [id, setId] = useState<number>(0);
    const {todoState, updateProductCart, deleteProductCart} = useContext(TodoContext);
    const {allproductsCart } = todoState;
    const handlerInputChange = (e : React.ChangeEvent<HTMLSelectElement>, id: number ) => {
        
        const filter = allproductsCart.filter(e  => e.id === id);
        const newprecio = parseFloat(filter[0].product.precio as string) * parseFloat(e.target.value);

        updateProductCart({id, newprecio})
    }
    
    useEffect(() => {
        let sum = 0;
        sum = sum + parseFloat(product.product.precio as string);

        console.log(sum)
    }, [product.product.precio])


    const handleDelete = async () => {
        deleteProductCart(id)
        setOpen(!open)
        try {
            const res = await axios.delete("http://localhost:3001/cart/delete/" + id);
            deleteProductCart(id)
            setOpen(!open)
        } catch (error) {
            console.log(error)
            setOpen(!open)
        }
    }
    return (
            <CardCartProductStyle>
                <div className='con0'>
                    <div className="con">
                        <div className={"con1"}>
                            <div className={"imgdiv"}>
                                <img src={product.product.imgurl} alt="" />
                            </div>
                            <div>
                                    <span>{product.product.name}</span>
                            </div>
                        </div>
                        
                        <div className={"con12"}>
                            {/*Poner el valor por unidad */}
                            {product.product.unit === "kg" 
                            ? <div>
                                <select name="kilo" id="" onChange={(e) => handlerInputChange(e,product.id)}>
                                    <option value="0.25">1/4</option>
                                    <option value="0.5">1/2</option>
                                    <option value="1">1</option>
                                    <option value="1.25">1-1/4</option>
                                    <option value="1.5">1-1/2</option>
                                    <option value="2">2</option>
                                </select>
                                kg
                            </div>
                            : <div>
                                <select name="cantidad" id="">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>    
                        }

                            <div>
                                <span>$ {product.product.precio}</span>
                            </div>
                        </div>
                    </div>
                    <DialogC open={open} handleClose={setOpen} deleteProduct={handleDelete}/>
                    <div onClick={() => {
                        setOpen(!open)
                        setId(product.id)
                        }} className='con-btndelete'>
                        <span className='btn-delete'>Eliminar</span>
                    </div>
                </div>
                
            </CardCartProductStyle>
    )
}

export default CardCart;