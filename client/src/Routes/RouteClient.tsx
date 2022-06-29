
import {Route, Routes,Navigate} from "react-router-dom";
import { CartPage } from "../Pages/Client/Cart-Page";
import InicioPage from "../Pages/Client/Inicio-Page";


interface Prop {
    type: string | null
}

const RoutePrivateClient = ({type}: Prop) => {
    console.log(type)
    return (
        <>
        {type === "Cliente" 
        ?<Routes>
        
            <Route path='/' element={<InicioPage/>}/>
            <Route path='/cart' element={<CartPage />}/>

        </Routes>
            : <Navigate to='/comercio'/>
    }
            
        </>
    )
}

export default RoutePrivateClient;