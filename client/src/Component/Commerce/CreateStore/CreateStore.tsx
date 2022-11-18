import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useStore } from "../../../hooks/useStore";
import { IFormValues } from "../../../Interface/Form";
import { Mapbox } from "../../../lib/mapbox/Mapbox";
import { createStore } from "../../../service/store";
import { schemaRegisterStore } from "../../../utils/schemayup";
import { Input } from "../../General/Input";
import { FormStoreStyle } from "./style";

interface Date {
    name: string,
    lastname: string,
    number_phone: string,
    location: string,
    email: string,
    name_local: string,
    password: string,
}

const CreateStore = () => {
    const [date, setDate] = useState<Date>({name:"", lastname:'', number_phone: '', location: '', email: '', name_local: '', password:''});
    const [file, setFile] = useState<File>();
    const [path, setPath] = useState<string>();
    const [lng, setLng] = useState<number | null>(null)
    const [lat, setLat] = useState<number | null>(null)
    const [response, setResponse] = useState({correct: false, error: false, loading: false});
    const inputImage = useRef<any>(null);

    const { register, formState: { errors }, handleSubmit } = useForm<IFormValues>({
        resolver: yupResolver(schemaRegisterStore)
    });


    const changeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0){
            const archivo = e.target.files[0];
            if(archivo.type.includes("image") && archivo.size < 4194304){
                const reader = new FileReader()
                reader.readAsDataURL(archivo)
               // console.log(reader.readAsDataURL(archivo))
                reader.onload = function load(){
                    console.log(reader.result)
                    setPath(reader.result as string);
                }
                setFile(archivo)
            }
            
        }else{
            console.log('incorrecto')
        }
        
    }

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate({
            ...date,
            [e.target.name] : e.target.value
        })
    }


    const onSubmit: SubmitHandler<IFormValues> = async (data) => {
        console.log(data)
        console.log(lng, lat, 'latlng')
        const {Nombre, Apellido, Nombre_Del_Kiosko, Contraseña, Direccion} = data;
        const newStore = {
            name: Nombre,
            lastname: Apellido,
            name_local: Nombre_Del_Kiosko,
            password: Contraseña,
            location: Direccion,
            lat,
            lng
        }

        try {
            
        } catch (error) {
            
        }
    }

    /*const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResponse({...response, loading: true})

        console.log(lat, lng)
        if(lat && lng){

            const newStore = {
                ...date,
                photoStore: path,
                lng,
                lat,
                type: "Comerciante"
            }
    
            console.log(newStore)
    
            try {
                const res = await createStore(newStore) ;
    
                res?.status === 200 ? setResponse({...response, correct: true}) : setResponse({...response, error: true})
            } catch (error) {
                console.log(error)
            }
        }else {
            console.log('no hay lat ni lon')
        }
    }*/


    return(
            <FormStoreStyle>
                <form onSubmit={handleSubmit(onSubmit)} className="form-store">
                    <div className="tit">
                        <h2>Crear Tienda</h2>
                    </div>
                    
                    <div className="con-form">
                                <Input 
                                    type='text'
                                    label='Nombre_Del_Kiosko'
                                    register={register}
                                    errors={errors.Nombre_Del_Kiosko}
                                    required
                                    placeholder='Los Sierras'
                                />

                                <Input 
                                    type='text'
                                    label='Nombre'
                                    register={register}
                                    errors={errors.Nombre}
                                    required
                                    placeholder='Juan'
                                />

                                <Input 
                                        type='text'
                                        label='Apellido'
                                        register={register}
                                        errors={errors.Apellido}
                                        required
                                        placeholder='Sierra'
                                />

                                <Input 
                                    type='mail'
                                    label='Email'
                                    register={register}
                                    errors={errors.Email}
                                    required
                                    placeholder='kiosko@gmail.com'
                                />  

                                <Input 
                                    type='phone'
                                    label='Telefono'
                                    register={register}
                                    errors={errors.Telefono}
                                    required
                                    placeholder='381XXXXXXX'
                                />
                        
                            {/*<label htmlFor="">Foto de la tienda</label>
                            <div>
                                <div className='con-btn-image'>
                                    {file ? (
                                        <img src={path}
                                        alt= ''
                                        onClick={e =>  {
                                            e.preventDefault()
                                            inputImage.current.click()
                                        }}
                                        />
                                    ): (
                                    <button
                                    className="btn-image"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        inputImage.current.click()
                                    }}>Elegir Foto</button>
                                    )
                                    }
                                </div>
                                </div>*/}

                            <input type="file" name="image" onChange={changeFile} style={{display:"none"}} ref={inputImage} />
                            <div className='con-map'>
                                <Mapbox 
                                formLat={setLat} 
                                formLng={setLng}
                                from='formcreate'
                                />

                                {lng === null && lat === null && <p className='msg-map'>Elige una direccion</p>}
                            </div>
                            
                            <Input 
                                    type='text'
                                    label='Direccion'
                                    register={register}
                                    errors={errors.Direccion}
                                    required
                                    placeholder='B san expedito mnz j lote 1'
                                />

                            <Input 
                                    type='password'
                                    label='Contraseña'
                                    register={register}
                                    errors={errors.Contraseña}
                                    required
                                />
                            {response.error && <div>Error al crear store</div>}                            
                            {response.loading ? <div>Cargando</div> : <button type="submit" className='btn-sb'>Crear tienda</button>}
                    </div>
                        
                    
                    
                    
                </form>
            </FormStoreStyle>
    )
}

export default CreateStore;