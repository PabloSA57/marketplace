import { useContext, useState, useEffect } from 'react';
import { EditProductStyle } from './style';

import CardProduct from './Component/CardProduct';
import AddProduct from './AddProducts/AddProduct';
import { TodoContext } from '../../../Context/Context';
import axios from 'axios';
import { Text } from '../../../styles/style.general';
import { Search } from '../../General/Search/Search';

//import { Producto } from '../../../Interface/Comercio';

const TypeArr = ["All", "Verduras", "Frutas", "Bebidas", "Golosinas", "Otros"]
const Edit = () => {
    const {todoState, getProductos, updateTipo} = useContext(TodoContext);
    const {productInfo, mycommerce} = todoState;
    const [active, setActive]= useState<boolean>(false);
    const [activeEdit, setActiveEdit] = useState<number[]>([0,0]);
    const [type, setType] = useState<string>('All')
    //const [productos, setProductos] = useState<Producto[]>([]);
    const [search, setSearch] = useState('');

    const handlerActive = (b: number[])  => {
        setActiveEdit(b);
    }
    console.log('edit')

    useEffect(() => {
        
        const ProdcutosAdd = async () => {
            try {
                if(mycommerce !== null){
                    console.log('fproduct')
                    const p = await axios.get(`http://localhost:3001/product-store/allproductstore/${mycommerce?.id}`);
                    console.log(p)
    
                    if(p.status === 200) getProductos(p.data);
                }
            } catch (error) {
                console.log(error)
            }

            
        }
    
        ProdcutosAdd()
    }, [mycommerce?.id]);

    const handlerType = (t: string) => {
        setType(t);
        updateTipo(t)
    }
    return (
            <EditProductStyle>
                <div className='con-edit'>
                    <div className='con1'>
                        <div>
                            <Search type='edit'/>
                        </div>
                        <div className='btn-add'>
                            <button onClick={() => setActive(true)}>Add</button>
                        </div>
                    </div>

                    <div className='con2'>
                        <div>
                            Productos
                        </div>

                        <div className='filt'>
                            {TypeArr.map(e => 
                                        <Text 
                                        onClick= {() => handlerType(e)}
                                        color={type === e ? 'orange' : null}
                                        size='14px' 
                                        weight='400' 
                                        lineheight='20px' 
                                        cursor='pointer'>
                                            {e}
                                        </Text>
                                        )}
                        </div>
                    </div>

                    <div className='con3'>
                        <div className='con31'>
                            { productInfo?.map(e =>  <CardProduct 
                                                        producto={e} 
                                                        activeProduct={activeEdit}
                                                        handlerActive={handlerActive}
                            />)}
                            
                            
                        </div>
                    </div>
                </div>
                
                <>
                { active ? <AddProduct setActiveModal={setActive}/> : null}
                </>
                

            </EditProductStyle>
    )
}

export default Edit;