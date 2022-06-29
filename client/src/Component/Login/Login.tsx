import React, { useContext, useState} from 'react'

import {Link, useNavigate} from 'react-router-dom';

import {LoginStyle} from "./style";


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
            const res =  await axios.post('http://localhost:3001/login', input)

            /*setState({
                loading: false,
                loader: true,
                error: false
            })*/
            //dispatch(jwtToken(res.data.token))
            console.log(res)

            if(res.data.type === "Comerciante"){
                    loginAuth(res.data.type, res.data)
                    window.localStorage.setItem('jwtToken', JSON.stringify(res.data.token))
                    window.localStorage.setItem('type', res.data.type)
                    setTimeout(() => {navigate('/comercio',{replace:true})}, 2000)   
            }else{
                    loginAuth(res.data.type, res.data.token)
                    window.localStorage.setItem('jwtToken', JSON.stringify(res.data.token))
                    window.localStorage.setItem('type', res.data.type)
                    setTimeout(() => {navigate('/home',{replace:true})}, 2000)   
            }
            console.log('listpo')

            }catch (error) {
                setState({
                    loading: false,
                    loader: false,
                    error: true
                })
            alert('incorrecto')
        }
    }

    const pruebaLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(input)
        const token = "123";
        const type = "Comerciante";

        window.localStorage.setItem('jwtToken', token);
        window.localStorage.setItem('type', type);

        loginAuth(type, token);
        console.log(token)
    }

    return (
                <LoginStyle>
                    <div>
                        <form  onSubmit={handlersubmit}>
                            <div>
                            <h2 className="">Login</h2>
                            </div>
                        
                            <div>
                            <label htmlFor="">Email</label>
                            <input 
                            type="email" 
                            name="email" 
                            value={input.email}
                            placeholder='Email' 
                            onChange={hadlerInput}/>
                            </div>
                            
                            <div>
                            <label htmlFor="">Password</label>
                            <input 
                            type="password" 
                            name="password" 
                            value={input.password}
                            placeholder='Password' 
                            onChange={hadlerInput}/>
                            </div>

                            <div>
                            <button type="submit">{state.loading ? "Loading..." : "Login"}</button>
                            </div>
                        
                        </form>

                <div>
                    <p>No tenes una cuenta? <Link to='/register'>Sign up</Link></p>
                </div>
                    </div>
                    
        
            </LoginStyle>
    )
}

export default Login;
