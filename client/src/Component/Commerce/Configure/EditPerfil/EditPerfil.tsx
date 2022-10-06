import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../../../../Context/Context'
import { Mapbox } from '../../../../lib/mapbox/Mapbox';
import { Input } from '../../../General/Input';
import { LoadImage } from '../../../General/LoadImage';
import { useForm, SubmitHandler} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaFormCart} from '../../../../utils/schemayup';
//import { IFormValuesUpdateStore } from '../../../../Interface/Form';
import { EditPerfilStyle } from './style.editperfil';

import { Button } from '../../../../styles/style.general';
import { IFormValues } from '../../../../Interface/Form';
import { checkChange } from '../../../../utils/checkChange';
import { updateStore } from '../../../../service/store';






export const EditPerfil = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<IFormValues>({
        resolver: yupResolver(schemaFormCart)
    });

    const {todoState} = useContext(TodoContext)
    const {mycommerce} = todoState;
    const [dataStore, setDatastore] = useState({
            name: mycommerce?.name,
            location: mycommerce?.location,
            number_phone: mycommerce?.number_phone,
            lat: mycommerce?.lat,
            lon: mycommerce?.lon,
    })

    const [file, setFile] = useState<File | null>(null);
    const [path, setPath] = useState<string>(mycommerce?.imgurl as string);

    const [lng, setLng] = useState<number | null>(null)
    const [lat, setLat] = useState<number | null>(null)

    useEffect(() => {
        setDatastore({
            name: mycommerce?.name,
            location: mycommerce?.location,
            number_phone: mycommerce?.number_phone,
            lat: mycommerce?.lat,
            lon: mycommerce?.lon,
        })
    }, [mycommerce])

    //deberia probar con una img
    const onSubmit: SubmitHandler<IFormValues> = async (data) => {
        console.log('onSubmit: ', data)
        console.log(lng)
        const newdata = checkChange(dataStore,{...data, lon: lng, lat})
        console.log(newdata)
        if(!newdata && !file){
            console.log('no newdate, file')
        }else {
            console.log('si, ambos')
            const resp = await updateStore(newdata, file, mycommerce?.id as number)

            console.log(resp)
        }


    };


    return (
        <EditPerfilStyle>
            
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <h2>edit perfil store</h2>
                    <div className='inp-form1'>
                        <div className='inp-imgstore'>
                            <label htmlFor="">Foto de la tienda</label>
                            <div 
                            style={{width:"180px", height: "160px"}}>
                                        <LoadImage 
                                        path={path} 
                                        file={file} 
                                        setFile={setFile} 
                                        setPath={setPath}/>
                            </div>
                        </div>

                        <div className='inp-info'>
                            <Input
                                type='text'
                                label='Nombre'
                                register={register} 
                                required
                                errors={errors.Nombre}
                                valueInp={mycommerce?.name}
                            />
                            <Input
                                type='text'
                                label='Direccion'
                                register={register} 
                                required
                                errors={errors.Direccion}
                                valueInp={mycommerce?.location}
                            />


                            <Input
                                type='tel'
                                label='Telefono'
                                register={register} 
                                required
                                errors={errors.Telefono}
                                valueInp={mycommerce?.number_phone }
                                />
                        </div>
                    </div>
                    

                    <Mapbox 
                        formLat={setLat} 
                        formLng={setLng}
                        from='updateStore'
                        LngLatStore={[mycommerce?.lon, mycommerce?.lat] as [number, number]}
                        
                    />

                        <Button 
                        width='100%' 
                        height='30px' 
                        backgroundColor='#d28a16' 
                        colortext='#ffffff' 
                        type='submit'
                        >
                            Actualizar
                        </Button>
            </form>
            </div>
            
        </EditPerfilStyle>
    )
}


/*export const EditPerfil = () => {
    const {todoState} = useContext(TodoContext)
    const {mycommerce} = todoState;
    const [dataStore, setDatastore] = useState({
            name: mycommerce?.name,
            location: mycommerce?.location,
            
    })
    const [file, setFile] = useState<File | null>(null);
    const [path, setPath] = useState<string>(mycommerce?.imgurl as string)

    const { register, formState: { errors }, handleSubmit } = useForm<IFormValuesUpdateStore>({
        resolver: yupResolver(schemaFormUpdateStore)
    });

    console.log('editperfil', dataStore)
    /*useEffect(() => {
            setDatastore({
                name: mycommerce?.name,
                location: mycommerce?.location,
        
            })

            setDataInput({
                name: mycommerce?.name,
                location: mycommerce?.location,
            })
        }, [mycommerce])*/

    /*const handleChange = (key: string) =>  (value: string) => {
        setDataInput({
            ...dataInput,
            [key]: value
        })
    }*/

    //no funciona
    /*const onSubmit: SubmitHandler<IFormValuesUpdateStore> = (data) => {
        console.log('onSubmit: ', data)
    }*/
    /* const handleUpdateStore = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
    //}*/


   /* return (
        
            <EditPerfilStyle>
                <div>
                    <div>
                    <form className='form'  onSubmit={handleSubmit(onSubmit)}>
                    
                    <Input
                            type='text'
                            label='Nombre'
                            register={register} 
                            required
                            errors={errors.Nombre}
                           
                        />
    
                    <Button 
                            width='100%' 
                            height='30px' 
                            backgroundColor='#1070e4' 
                            colortext='#ffffff' 
                            type='submit'
                            />
                    </form>
                    </div>

                
               {/* <form  onSubmit={handleSubmit(onSubmit)}>

                    <Input
                        type='text'
                        label='Nombre'
                        register={register} 
                        required
                        errors={errors.Nombre}
                        valueInp={dataStore.name}
                    />
                
                    <Input
                        type='tel'
                        label='Telefono'
                        register={register} 
                        required
                        errors={errors.Telefono}
                    />

                    <Input
                        type='text'
                        label='Direccion'
                        register={register} 
                        required
                        errors={errors.Direccion}
                        valueInp={dataStore.location}
                    />
                <label htmlFor="">Foto de la tienda</label>
                    <div style={{width:"180px", height: "160px"}}>
                                <LoadImage path={path} file={file} setFile={setFile} setPath={setPath}/>
                    </div>
    
                    <Button 
                        width='100%' 
                        height='30px' 
                        backgroundColor='#1070e4' 
                        colortext='#ffffff' 
                        type='submit'
                        />
                </form>*///}
            // </div>
           // </EditPerfilStyle>
    //)*/
//}*/
