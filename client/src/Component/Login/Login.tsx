import React, { useContext, useState} from 'react'

import {Link, useNavigate} from 'react-router-dom';

import {LoginRegisterStyle} from "./style";


import axios from "axios";
import { TodoContext } from '../../Context/Context';




const Login = () => {
const {loginAuth} = useContext(TodoContext);
    const [input, setInput] = useState({
        email:'',
        password:''
    });
    const [state, setState] = useState({
        loading: false,
        loader: false,
        error: false
    })

    const navigate = useNavigate();


    function hadlerInput(e: React.ChangeEvent<HTMLInputElement>) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const handlersubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    }


    return (
                <LoginRegisterStyle>
                    <div className='con-lr'>
                            <div>
                                <h2 className="">Login</h2>
                            </div>
                        <form  onSubmit={handlersubmit}>
                            <div className='input-div'>
                                <input 
                                type="email" 
                                name="email" 
                                value={input.email}
                                placeholder='Email' 
                                onChange={hadlerInput}/>
                            </div>
                            
                            <div className='input-div'>
                                <input 
                                type="password" 
                                name="password" 
                                value={input.password}
                                placeholder='Password' 
                                onChange={hadlerInput}/>
                            </div>

                            <div className='div-btn'>
                                <button type="submit">{state.loading ? "Loading..." : "Login"}</button>
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
