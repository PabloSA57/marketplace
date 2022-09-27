import axios from "axios";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ConfigureStyle } from "./style";

const Configure = () => {
    const [mdcobro, setMdcobro] = useState("Desconectado")
    const mdCobro = async () => {
        if(mdcobro === 'Conectado'){
            console.log('deconectar mp')
            return
        }

        window.location.replace('https://auth.mercadopago.com/authorization?client_id=1379032387256720&response_type=code&platform_id=mp&state=AUTORIZACION&redirect_uri=http://localhost:3001/mercadopago/redirect')
        console.log('conectar mp')
    }
    return (
            <ConfigureStyle>
                <div>
                    Configure
                </div>
                
                
                <NavLink to= '/commerce/config/perfil'>
                    <div className='card-sec'>
                        <p>Editar perfil</p>

                        <span> {'>'} </span>
                    </div>
                </NavLink>
                <div className='card-sec'
                    onClick={mdCobro}
                >
                    <p>
                        {mdcobro === 'Conectado' && "Desconectar mercadopago"}
                        {mdcobro === 'Desconectado' && "Conectar con mercadopago"}
                    </p>

                    <span> {'>'} </span>
                </div>

                <div className='card-sec'>
                    <p>Editar perfil</p>

                    <span> {'>'} </span>
                </div>
                
            </ConfigureStyle>
        
    )
}

export default Configure;
