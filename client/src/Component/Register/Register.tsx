import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { RegisterStyle } from './style';

import axios from 'axios';
import { LoginRegisterStyle } from '../Login/style';
import { Input } from '../General/Input';
import { useForm, SubmitHandler} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaFormCart, schemaRegister } from '../../utils/schemayup';
import { IFormValues } from '../../Interface/Form';

type HandlerInputChange = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

const Register = () => {
    const navigate = useNavigate()

    const [c , setc] = useState(false)
    const [input, setInput] = useState({
        name:'',
        lastname:'',
        email: '',
        password: '',
        type: 'Cliente'
    })

    const { register, formState: { errors }, handleSubmit } = useForm<IFormValues>({
        resolver: yupResolver(schemaRegister)
    });

    

    console.log(input)
    function hadlerInput(e: HandlerInputChange ){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit: SubmitHandler<IFormValues> = async (data) => {
        console.log('onSubmit: ', data)
        const obj = {
            name: data.Nombre,
            lastname: data.Apellido,
            email: data.Email,
            password: data.Contraseña
        }

        try {
            const po =  await axios.post("http://localhost:3001/user/register", obj)
            console.log(po)
            navigate("/login")
        } catch (error) {
            console.error('Error de login: ', error)
        }
    }

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("submit")

        try {
            const po =  await axios.post("http://localhost:3001/user/register", input)
            console.log(po)
        setInput({
            name:'',
            lastname: '',
            email: '',
            password: '',
            type: ''
        })
        
        navigate("/login");
        } catch (error) {
            console.log(error)
            setc(true)
        }
        
        
    }

    console.log(input)
    return(
            <LoginRegisterStyle>
                <div className='con-lr'>
                        <div >
                        <h2>Register Cliente</h2>
                        </div>
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/*<input 
                        type="text" 
                        {...register('Nombre')}

                        />
    <p>{errors?.Nombre?.message}</p>*/}
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
                                        placeholder='Juan'
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
                                    type='password'
                                    label='Contraseña'
                                    register={register}
                                    errors={errors.Contraseña}
                                    required
                                />

                            <div className='div-btn'>
                                <button type="submit">Registrar</button>
                            </div>
                    </form>
                    <div>
                            <p>Ya tienes una cuenta? <Link to='/login'>Login</Link></p>
                        </div>
                    <div>
                    {
                        c && <p>Se registro correctamente</p>
                    }
                    </div>
                </div>

            </LoginRegisterStyle>
    )
}

export default Register;
