import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { RegisterStyle } from './style';

import axios from 'axios';

type HandlerInputChange = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

const Register = () => {
    const navigate = useNavigate()

    const [c , setc] = useState(false)
    const [input, setInput] = useState({
        name:'',
        lastname:'',
        email: '',
        password: '',
        type: ''
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
            const po =  await axios.post("http://localhost:3001/register", input)
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
        <RegisterStyle>
            <div >
                <h2>Register</h2>
            </div>
            
            <form action="" onSubmit={submit}>
                <div >
                <label htmlFor="">Name</label>    
                <input type="text" name="name" value={input.name} onChange={hadlerInput} placeholder="Name"/>
                </div>
                
                <div>
                <label htmlFor="">LastName</label> 
                <input type="text" name="lastname" value={input.lastname} onChange={hadlerInput}  placeholder="Last Name"/>

                </div>
                
                <div>
                <label htmlFor="">Email</label>    
                <input type="email" name="email" value={input.email} onChange={hadlerInput}  placeholder="Email"/>

                </div>
                
                <div>
                    <label htmlFor="">Password</label>    
                    <input type="password" name="password" value={input.password} onChange={hadlerInput}  placeholder="Password"/>
                </div>
                
                <div>
                    <label htmlFor="">Type</label>
                    <div>

                        <select name="type" onChange={hadlerInput}>
                            <option>Elija</option>
                            <option value="Cliente">Cliente</option>
                            <option value="Comerciante">Comerciante</option>
                        </select>
                        {/* <div 
                        onClick={(() => setInput({...input, type: "Cliente"}))
                        }>Cliente</div>
                        <div 
                    onClick={(() => setInput({...input, type: "Comerciante"}))}>Comerciante</div>*/}
                    </div>
                </div>

                <div>
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
        </RegisterStyle>
    )
}

export default Register;
