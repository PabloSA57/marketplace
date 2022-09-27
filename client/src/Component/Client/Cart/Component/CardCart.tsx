import { ProductInfo } from '../../../../Interface/Commerce';
import { CardCartProductStyle } from './style';

import { useContext, useEffect, Suspense, useState } from 'react';
import { TodoContext } from '../../../../Context/Context';
import DialogC from '../../../Commerce/Edit/Component/Component/Dialog';
import axios from 'axios';
import { useSesionStorage } from '../../../../hooks/useSesionStorage';


interface Prop {

    product: ProductInfo
}
const CardCart = ({product}: Prop) => {
    const {delet} = useSesionStorage('productscart')
    const [open, setOpen] = useState<boolean>(false);
    const [id, setId] = useState<number>(0);
    const {todoState, updateProductCart, deleteProductCart} = useContext(TodoContext);
    const {allproductsCart } = todoState;
    const handlerInputChange = (e : React.ChangeEvent<HTMLSelectElement>, id: number ) => {
        
        const filter = allproductsCart?.filter(e  => e.id === id) as ProductInfo[];
        const newprecio =   parseFloat(filter[0]?.product.precio as string) * parseFloat(e.target.value);

        updateProductCart({id, newprecio})
    }
    
    useEffect(() => {
      
        let sum = 0;
        sum = sum + parseFloat(product.product.precio as string);

        console.log(sum)
    }, [product.product.precio])


    const handleDelete = async () => {
        deleteProductCart(id)
        delet(id)
        setOpen(!open)
        /*try {
            const res = await axios.delete("http://localhost:3001/cart/delete/" + id);
            deleteProductCart(id)
            setOpen(!open)
        } catch (error) {
            console.log(error)
            setOpen(!open)
        }*/
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
                                    <p className='name'>{product.product.name}</p>
                            </div>
                        </div>
                        
                        <div className={"con12"}>
                            {/*Poner el valor por unidad */}
                            {product.product.unit === "kg" 
                            ? <div>
                                <select name="kilo" id="" onChange={(e) => handlerInputChange(e,product.id as number)}>
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
                                <select name="cantidad" id="" onChange={(e) => handlerInputChange(e,product.id as number)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>    
                        }

                            <div>
                                <p className='precio-text'>$ {product.product.precio}</p>
                            </div>
                        </div>
                    </div>
                    <DialogC open={open} handleClose={setOpen} deleteProduct={handleDelete}/>
                    <div onClick={() => {
                        setOpen(!open)
                        setId(product.id as number)
                        }} className='con-btndelete'>
                        <span className='btn-delete'>Eliminar</span>
                    </div>
                </div>
                
            </CardCartProductStyle>
    )
}

export default CardCart;