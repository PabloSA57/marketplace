import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../../../../Context/Context'
import { Mapbox } from '../../../../lib/mapbox/Mapbox';
import { Input } from '../../../General/Input';
import { LoadImage } from '../../../General/LoadImage';

export const EditPerfil = () => {
    const {todoState} = useContext(TodoContext)
    const {mycommerce} = todoState;
    const [dataStore, setDatastore] = useState({
            name: mycommerce?.name,
            location: mycommerce?.location,
            
    })
    const [dataInput, setDataInput] = useState({
        name: mycommerce?.name ,
        location: mycommerce?.location,
})
    const [file, setFile] = useState<File | null>(null);
    const [path, setPath] = useState<string>(mycommerce?.imgurl as string)

    useEffect(() => {
            setDatastore({
                name: mycommerce?.name,
                location: mycommerce?.location,
        
            })

            setDataInput({
                name: mycommerce?.name,
                location: mycommerce?.location,
            })
        }, [mycommerce])

    const handleChange = (key: string) =>  (value: string) => {
        setDataInput({
            ...dataInput,
            [key]: value
        })
    }

    const handleUpdateStore = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log('input: ', dataInput.name, 'store: ', dataStore.name)
        if(dataInput.name === dataStore.name){
            console.log('sigue igual')
        }else {
            console.log('cambio')
        }

        /*try {
            const res = await axios.put('http://localhost:3001/store/updatestore', )
        } catch (error) {
            
        }*/
    }
    return (
        <div>
            <div>
                <form action="">
                <label htmlFor="">Foto de la tienda</label>
                    <div style={{width:"180px", height: "160px"}}>
                                <LoadImage path={path} file={file} setFile={setFile} setPath={setPath}/>
                    </div>

                    <div>

                     
                    </div>
                    

                    

                    <button onClick={handleUpdateStore}>Actualizar tienda</button>
                </form>
            </div>
            
        </div>
    )
}
