import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { RegisterStyle } from './style';

import axios from 'axios';
import { LoginRegisterStyle } from '../Login/style';

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

    console.log(input)
    function hadlerInput(e: HandlerInputChange ){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
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
                    
                    <form action="" onSubmit={submit}>
                        <div className='input-div'>
                        
                        <input type="text" name="name" value={input.name} onChange={hadlerInput} placeholder="Name"/>
                        </div>
                        
                        <div className='input-div'>  
                        <input type="text" name="lastname" value={input.lastname} onChange={hadlerInput}  placeholder="Last Name"/>

                        </div>
                        
                        <div className='input-div'>
                        <input type="email" name="email" value={input.email} onChange={hadlerInput}  placeholder="Email"/>

                        </div>
                        
                        <div className='input-div'>    
                            <input type="password" name="password" value={input.password} onChange={hadlerInput}  placeholder="Password"/>
                        </div>

                        <div className='div-btn'>
                            <button type="submit">Register</button>
                        </div>
                    </form>
                    <div>
                            <p>Ya tiene una cuenta? <Link to='/login'>Login</Link></p>
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
