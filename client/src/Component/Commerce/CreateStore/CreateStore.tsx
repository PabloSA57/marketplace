import axios from "axios";
import { useRef, useState } from "react";
import { useStore } from "../../../hooks/useStore";
import { Mapbox } from "../../../lib/mapbox/Mapbox";
import { createStore } from "../../../service/store";
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

    const {prueba} = useStore()

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


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResponse({...response, loading: true})
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
    }

    const submitPrueba = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        prueba()
    }

    return(
            <FormStoreStyle>
                <form action="" onSubmit={handleSubmit} className="form-store">
                    <div className="tit">
                        <h2>Crear Tienda</h2>
                    </div>
                    
                    <div className="con-form">
                        <div>
                            <label htmlFor="">Nombre del local</label>
                            <input 
                            type="text" 
                            name="name_local"
                            value={date.name_local} 
                            onChange={changeInput} className="inp" placeholder="Ej Los Sierras"/>
                        </div>

                        <label >Nombre</label>
                            <input 
                            type="text"
                            value={date.name}
                            name="name"  
                            className="inp"
                            onChange={changeInput} 
                        />

                        <div>
                            <label >Apellido</label>
                                <input 
                                type="text"
                                name='lastname'
                                value={date.lastname}  
                                className="inp"
                                onChange={changeInput} 
                            />
                        </div>

                        <div>
                            <label >Mail</label>
                                <input 
                                type="email"
                                name="email"
                                value={date.email}  
                                className="inp"
                                onChange={changeInput}
                            />
                        </div>

                        <div>
                            <label >Numero de telefono</label>
                            <input 
                            type="tel"
                            name="number_phone"
                            value={date.number_phone}
                            placeholder="+549-XXX-XXXX-XXXX" 
                            className="inp" 
                            onChange={changeInput}
                            />
                        </div>
                        
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

                            <Mapbox 
                            formLat={setLat} 
                            formLng={setLng}
                            from='formcreate'
                            />
                            <div>
                                <label htmlFor="">Ubicacion</label>
                                <input 
                                type="text" 
                                className="inp"
                                name='location'
                                value={date.location}
                                placeholder='Ej Tucuman-Yerba Buena' 
                                onChange={changeInput}/>
                            </div>

                            <label >Password</label>
                            <input 
                            type="password"
                            value={date.password}
                            name="password"  
                            className="inp"
                            onChange={changeInput} 
                        />
                            {response.error && <div>Error al crear store</div>}                            
                            {response.loading ? <div>Cargando</div> : <button type="submit" className='btn-sb'>Crear tienda</button>}
                    </div>
                        
                    
                    
                    
                </form>
            </FormStoreStyle>
    )
}

export default CreateStore;