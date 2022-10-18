import React, { useRef, useState, useContext } from 'react'
import { CardProductStyle } from './style';

import { RiEditLine, RiDeleteBinLine } from "react-icons/ri";
import { BiSave } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import axios from 'axios';
import DialogC from './Component/Dialog';
import { Product, ProductInfo } from '../../../../Interface/Commerce';
import { TodoContext } from '../../../../Context/Context';

interface Prop{
    producto: ProductInfo,
    activeProduct: number[],
    handlerActive: (b: number[]) => void
}

interface State{
    stock: string | null| undefined,
    precio: string | undefined
}
const CardProduct = ({producto, activeProduct, handlerActive}: Prop) => {
    //const [activeEdit, setActiveEdit] = useState([false, false]);
    const {updateProducto, deleteProduct} = useContext(TodoContext);
    const [loader, setLoader] = useState(false);
    const [update, setUpdate] = useState<State>({
        stock: null,
        precio: ''
    })
    const [open, setOpen] = useState<boolean>(false);
    const [stateDelete, setStateDelete] = useState<{
        aproved: boolean,
        loading: boolean,
        error: boolean,
    }>({
        aproved: false,
        loading: false,
        error: false,
    });

    const check= useRef<HTMLInputElement>(null);

    console.log(producto)
    const changeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(check.current?.checked)
        console.log(e.target.value)
        setUpdate({
            ...update,
            stock: e.target.value
        })
    }

    const changePrecio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdate({
            ...update,
            precio: e.target.value
        })
    }

    const cancelEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setUpdate({
            stock: '',
            precio: ''
        })
        handlerActive([0,0]);
    }
    const updateProduct = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
        e.preventDefault();
        setLoader(true);
        try {
            const res = await axios.put("http://localhost:3001/product-store/updateproduct", {
                precio: update.precio,
                stock: update.stock,
                id: id
            })

            console.log(res)

            setLoader(false);
            updateProducto(id, update.precio, update.stock);
            handlerActive([0,0]);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProducto = async () => {
        console.log(activeProduct[1])
            setStateDelete({
                loading: true,
                aproved: false,
                error: false,
            })
            setLoader(true);
            try {
                const res = await axios.delete(`http://localhost:3001/product-store/deleteproduct/${activeProduct[1]}`)
                console.log(res)
                setLoader(false);
                deleteProduct(activeProduct[1]);
                //setOpen(false);
                handlerActive([0,0]);
                setStateDelete({
                    loading: false,
                    aproved: true,
                    error: false,
                })
            } catch (error) {
                console.log(error)
                setStateDelete({
                    loading: false,
                    aproved: false,
                    error: true,
                })
            }
    }
    return (
        <CardProductStyle>
                {activeProduct[0] === producto.id 
                ?   <div className='state-product'>
                        <fieldset >
                            {producto.product.stock === "stock" ? <input type="radio"
                            onChange={changeRadio}
                            ref={check}
                            name={`stock${producto.id}`} 
                            value='stock'
                            checked
                            />
                            :<input type="radio"
                            onChange={changeRadio}
                            ref={check}
                            name={`stock${producto.id}`} 
                            value='stock'
                            />
                        }

                            {producto.product.stock === "stock" ? <input type="radio"
                            onChange={changeRadio}
                            
                            name={`stock${producto.id}`} 
                            value='nostock' 
                                />
                            : <input type="radio"
                            onChange={changeRadio}
                            
                            name={`stock${producto.id}`} 
                            value='nostock'
                            checked 
                                />
                            }
                        </fieldset>
                    </div> 
                :<div 
                className={producto.product.stock === "stock" ?'stock' : 'nostock'}>
                </div>}

                <div className='img-cp'>
                    <img src={producto.product.imgurl} alt="" />
                </div>

                <div className='name-card'>
                    <span>{producto.product.name}</span>
                </div>

                <div className='categoria'>
                    <span>{producto.product.categoria}</span>
                </div>

                <div className='precio'>
                    {activeProduct[0] === producto.id 
                    ? <input  type="number"
                        onChange={changePrecio}
                        name="precio"
                        value={update.precio}
                        placeholder='New precio'/> 
                    :<span>$ {producto.product.precio ? producto.product.precio : 0}</span>
                    }
                </div>

                <div className='edit-delete'>
                    <div 
                    className={activeProduct[0] === producto.id ? "e-d-btn active" : "e-d-btn"}
                    onClick={() => {
                        handlerActive([producto.id as number,0]);
                        setUpdate({
                            stock: producto.product.stock,
                            precio: producto.product.precio
                        })
                        }}>
                        <span><RiEditLine /></span>
                    </div>

                    <div 
                    className={activeProduct[1] === producto.id ? "e-d-btn active" : "e-d-btn"}
                    onClick={() => handlerActive([0,producto.id as number])}>
                        <span onClick={() => {
                                setOpen(!open)
                                handlerActive([0,producto.id as number])
                                }}>
                                <RiDeleteBinLine />
                        </span>
                    </div>
                    
                    <DialogC 
                        open={open} 
                        handleClose={setOpen} 
                        deleteProduct={deleteProducto}
                        state={stateDelete}
                        />

                    {activeProduct[0] === producto.id 
                    ?<div className='btn-save'>
                        <button 
                        onClick={(e) => updateProduct(e,producto.id as number)}>{loader ? "c.." :<BiSave />}</button>
                    </div>
                    : null    
                    } 

                    {activeProduct[0] === producto.id 
                    ?<div className='btn-close'>
                        <span onClick={cancelEdit}><AiOutlineClose /></span>
                    </div>
                    : null    
                    }
                </div>
        </CardProductStyle>
    ) 
}

export default CardProduct;
