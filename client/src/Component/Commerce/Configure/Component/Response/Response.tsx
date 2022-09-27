import axios from 'axios';
import {useContext, useEffect} from 'react';
import { TodoContext } from '../../../../../Context/Context';
const Response = () => {
    
    useEffect(() => {
        async function recibeCode() {
            const code = document.cookie.slice(5);
            const storeId = localStorage.getItem('idStore');
            console.log(storeId)
            console.log(code)
            if(code && storeId){
                const resMp= await  axios.post("http://localhost:3001/mercadopago/postcode", {code, storeId} );
                console.log(resMp)
            }
            console.log(code)
        }
        recibeCode();
    }, [])

    return (
        <div>
        resonse
        </div>
    )
}

export default Response;