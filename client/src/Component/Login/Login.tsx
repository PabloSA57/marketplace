import React, { useContext, useRef, useState} from 'react'

import {Link, useNavigate} from 'react-router-dom';

import {LoginRegisterStyle} from "./style";
import { TodoContext } from '../../Context/Context';

import axios from "axios";
import { Input } from '../General/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormValues } from '../../Interface/Form';
import { schemaLogin } from '../../utils/schemayup';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginService } from '../../service/auth';
import MyMap from '../General/Map/Map';




const Login = () => {
const {loginAuth} = useContext(TodoContext);
    const [input, setInput] = useState({
        email:'',
        password:''
    });
    const [state, setState] = useState({
        loading: false,
        ok: false,
        error: {state: false, msg: ''}
    })
    const btnRef = useRef<HTMLButtonElement >(null)
    const { register, formState: { errors }, handleSubmit } = useForm<IFormValues>({
        resolver: yupResolver(schemaLogin)
    });

    const navigate = useNavigate();


    /*function hadlerInput(e: React.ChangeEvent<HTMLInputElement>) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }*/

    const onSubmit: SubmitHandler<IFormValues> = async (data) => {

        const newLogin = {
            email: data.Email,
            password: data.Contraseña
        }

       // if(btnRef.current) btnRef.current.disabled = true;

        setState({loading: true, ok: false, error: {state: false, msg: ''}})
            const res =  await loginService(newLogin);

            const localStorageFunc = (res: {token: string, type: string}) => {
                window.localStorage.setItem('jwtToken', JSON.stringify(res.token))
                window.localStorage.setItem('type', res.type)
            }

            

            if(res.status === 200){
                const data = res.data as {type:string, token: string}
                console.log(data.type)
                if(data.type === "Comerciante"){
                    loginAuth(data.type , data.token)
                    localStorageFunc(data)
                    setTimeout(() => {navigate('/commerce',{replace:true})}, 2000)   
                }else{
                    loginAuth(data.type, data.token)
                    localStorageFunc(data)
                    setTimeout(() => {navigate('/inicio',{replace:true})}, 2000)   
                }
                setState({loading: true, ok: false, error: {state: false, msg: ''}})
            }else {
                setState({loading: false, ok: false, error: {state: true, msg: res.data as string}})
                if(btnRef.current) btnRef.current.disabled = false;
            }
    }

    /*const handlersubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setState({
            loading: true,
            loader: false,
            error: false
        })
        try {
            const res =  await axios.post('http://localhost:3001/user/login', input)

            if(res.data.type === "Comerciante"){
                    loginAuth(res.data.type, res.data)
                    window.localStorage.setItem('jwtToken', JSON.stringify(res.data.token))
                    window.localStorage.setItem('type', res.data.type)
                    setTimeout(() => {navigate('/commerce',{replace:true})}, 2000)   
            }else{
                    loginAuth(res.data.type, res.data.token)
                    window.localStorage.setItem('jwtToken', JSON.stringify(res.data.token))
                    window.localStorage.setItem('type', res.data.type)
                    setTimeout(() => {navigate('/inicio',{replace:true})}, 2000)   
            }

        }catch (error) {
                setState({
                    loading: false,
                    loader: false,
                    error: true
                })
            alert('incorrecto')
        }
    }*/


    return (
                <LoginRegisterStyle>
                    <div className='con-lr'>
                        <div className='prueba-map'>
                            <MyMap />

                        </div>
                        <div>
                            <h2 className="">Login</h2>
                        </div>

                        <form  onSubmit={handleSubmit(onSubmit)}>
                                <Input 
                                    type='email'
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
                                    <button
                                    ref={btnRef} 
                                    type="submit"
                                    
                                    >{state.loading ? "Cargando..." : "Login"}</button>
                                    {state.error.state && <p className='msg-error'>{state?.error?.msg}</p>}
                                </div>

                               
                            
                        </form>

                        <div>
                            <p>No tenes una cuenta? <Link to='/register'>Sign up</Link></p>
                        </div>
                    </div>
                </LoginRegisterStyle>
    )
}

export default Login;
