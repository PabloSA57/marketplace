import { useState, useEffect, useContext } from 'react';
import { EditProductStyle } from './style';

import axios from 'axios';
import { TodoContext } from '../../../Context/Context';
import CardProduct from './Component/CardProduct';
//import { Producto } from '../../../Interface/Comercio';


const Edit = () => {
    const {getProductos, todoState} = useContext(TodoContext);
    const {products} = todoState;
    const [active, setActive]= useState<boolean>(false);
    const [activeEdit, setActiveEdit] = useState<number[]>([0,0]);
    //const [productos, setProductos] = useState<Producto[]>([]);

    const handlerActive = (b: number[])  => {
        setActiveEdit(b);
    }
    console.log('edit')

   /* useEffect(() => {
        
        const ProdcutosAdd = async () => {
            const p = await axios.get(`http://localhost:3001/productoftienda/${1}`);
            console.log(p)

            if(p.status === 200) getProductos(p.data);
        }
    
        ProdcutosAdd()
    }, []);*/

    return (
            <EditProductStyle>
                <div className='con-edit'>
                    <div className='con1'>
                        <div><input type="text" name="" id="" /></div>
                    {/* <div><button onClick={() => setActive(true)}>Add</button></div>*/}
                    </div>

                    <div className='con2'>
                        <div>
                            Productos
                        </div>

                        <div>
                            Categorias
                        </div>
                    </div>

                    <div className='con3'>
                        <div className='con31'>
                            { products?.map(e =>  <CardProduct producto={e} activeProduct={activeEdit}
                            handlerActive={handlerActive}
                            />)}
                            
                            
                        </div>
                    </div>
                </div>

                {/*active ? <AddProduct activeC={setActive}/> : null*/}

            </EditProductStyle>
    )
}

export default Edit;