
import { Suspense, lazy, useEffect, useContext } from "react";
import {Route, Routes,Navigate} from "react-router-dom";
import { TodoContext } from "../Context/Context";
import { useAuth } from "../hooks/useAuth";
import { Authentication } from "../utils/authentication";

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
                    <Route path='/' element={<InicioPage/>}/>
                    <Route path='/cart' element={<CartPage />}/>
                </Routes>
                
            </Suspense>
        
            : <Navigate to='/comercio'/>
    }
            
        </>
    )
}

export default RoutePrivateClient;