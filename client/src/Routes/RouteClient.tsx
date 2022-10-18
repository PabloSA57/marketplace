
import { Suspense, lazy } from "react";
import {Route, Routes,Navigate} from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ClientPage } from "../Pages/Client/ClientPage";

const InicioPage = lazy(() => import('../Pages/Client/Inicio-Page'))
const CartPage = lazy(() => import('../Pages/Client/Cart-Page'))

interface Prop {
    type: string | null
}

const RoutePrivateClient = ({type}: Prop) => {
    console.log(type)
    useAuth()
    return (
        <>
        {type === "Cliente" 
        ?   <Suspense fallback={<div>Cargando...</div>}>
                <Routes>
                    <Route path='/' element={<ClientPage />}>
                        <Route index element={<InicioPage/>}/>
                        <Route path='/cart' element={<CartPage />}/>
                    </Route>
                    
                </Routes>
                
            </Suspense>
        
            : <Navigate to='/comercio'/>
    }
            
        </>
    )
}

export default RoutePrivateClient;