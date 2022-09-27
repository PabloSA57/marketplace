import React, {useContext, useEffect, useState} from 'react'

import { AddProductStyle } from './style';

import CardProduct from './Component/CardProduct/CardProduct';

import axios from 'axios';

import { Text } from '../../../../styles/style.general';
import { TodoContext } from '../../../../Context/Context';
import { Product } from '../../../../Interface/Commerce';
/*interface Prop{
    activeC: React.Dispatch<React.SetStateAction<boolean>>
}*/

const TypeArr = ["All", "Verduras", "Frutas", "Bebidas", "Golosinas", "Otros"]

export const AddProduct = () => {
    const {getProductos,updateTipo, todoState} =  useContext(TodoContext);
    const {productInfo, mycommerce} = todoState;

    const [active, setActive] = useState('All')
    const [arrayProductSelect, setArrayProductSelect] = useState<number[]>([]);
    const [found , setFound] = useState(false);
    //const [selectCard, setSelectCard] = useState(0);

    console.log(arrayProductSelect)

    const handlerSelect = (id: number) => {
        //setSelectCard(id);
        let res = arrayProductSelect.some((item) => item === id);

        res 
        ? setArrayProductSelect(arrayProductSelect.filter((item) => item !== id)) 
        : setArrayProductSelect([...arrayProductSelect, id])
    }

    const searchId = (id: number) => {
        let res = arrayProductSelect.some((item) => item === id);
        setFound(res);
    }

    useEffect(() => {
        const getProductToAddf = async () => {
            const res = await axios.get("http://localhost:3001/product-store/producttoadd/" + mycommerce?.id);
            console.log(res);
            getProductos(res.data)
        }

        getProductToAddf()
    }, [])


    const addProduct = async() => {
        console.log(arrayProductSelect)
        const res = await axios.post("http://localhost:3001/product-store/addproductstore/", {
            productos: arrayProductSelect,
            tiendaId: mycommerce?.id
        });
        console.log(res.data);
        window.location.reload();
    }


    const handlerTipo = (name: string) => {
        updateTipo(name)
        setActive(name)
    }
    
    const closeComponet = () => {
        //activeC(false);
        window.location.reload();
    }
    return (
            <AddProductStyle>
                <div className='-con'>
                    <div className='con-edit'>
                        <div className='con-edit1'>
                            <div className='con-edit11'>
                                <button onClick={closeComponet}>X</button>
                            </div>

                            <div className='con-edit12'>
                                <div>
                                    Todos los productos
                                </div>

                                <div className='filt'>
                                    {TypeArr.map(e => 
                                    <Text 
                                    onClick= {() => handlerTipo(e)}
                                    color={active === e ? 'orange' : null}
                                    size='14px' 
                                    weight='400' 
                                    lineheight='20px' 
                                    cursor='pointer'>
                                        {e}
                                    </Text>
                                    )}
                                </div>
                            </div>

                            <div className='con-edit13'>
                                {productInfo?.map(producto => <CardProduct producto={producto} 
                                funcSelect={handlerSelect}
                                searchId={searchId}
                                found={found}
                                />)}
                            </div>
                            {arrayProductSelect.length > 0 
                                ?<button 
                                className='btn-add'
                                onClick={addProduct}
                                >
                                Agregar {arrayProductSelect.length}
                                </button> 
                                : null}
                        </div>
                    </div>
                </div>
            </AddProductStyle>
    )
}




export default AddProduct;
/*const AddProduct = ({activeC}: Prop) => {
    const [c , setc] = useState(false)
    const [input, setInput] = useState<Producto>({
        id:'',
        name:'',
        img:'',
        categoria: '',
        almacen: '',
        precio: '',
        descripcion: '',
    })

    function hadlerInput(e: React.ChangeEvent<HTMLInputElement>){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const submit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log("submit")
        
        
    }

    return (
            <AddProductStyle>
                <div className='-con'>
                    

                    <div className='con-edit'>
                        <div className='con-form'>
                            <div className='con-form1'>
                                <div>
                                    Añadir producto
                                </div>
                                <button onClick={() => activeC(false)}>X</button>
                            </div>

                            <div className='con-form2'>
                                <div className='con-form22'>
                                    <div >    
                                        <input
                                        className='con-form21'
                                        type="text" 
                                        name="name" 
                                        value={input.name} 
                                        onChange={hadlerInput} 
                                        placeholder="Name"/>
                                    </div>
                                    
                                    
                                    <div>   
                                        <input
                                        className='con-form21'
                                        type="number" 
                                        name="precio" 
                                        value={input.precio} 
                                        onChange={hadlerInput}  
                                        placeholder="Precio"/>
                                    </div>
                                    
                                    <div>    
                                        <select className='con-form21' name="" id="">
                                            <option value="">Verduras</option>
                                            <option value="">Verduras</option>
                                            <option value="">Verduras</option>
                                        </select>
                                    </div>

                                    <div>
                                        <input
                                        className='con-form21'
                                        type="text" 
                                        placeholder='Descripcion'/>
                                    </div>
                                    <div className='con-form-btn'>
                                        <button  onClick={submit} >Crear</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AddProductStyle>
    )
}*/