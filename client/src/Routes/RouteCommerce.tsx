
import axios from "axios";
import { useContext, useEffect } from "react";
import {Route, Routes,Navigate} from "react-router-dom";
import Configure from "../Component/Commerce/Configure/Configure";
import { EditPerfil } from "../Component/Commerce/Configure/EditPerfil/EditPerfil";
import { TodoContext } from "../Context/Context";
import { useAuth } from "../hooks/useAuth";
import { useStore } from "../hooks/useStore";
import CommercePage from "../Pages/Commerce/Commerce-Page";
import ConfigurePage from "../Pages/Commerce/Configure-Page";
import DashboardPage from "../Pages/Commerce/Dashboard-Page";
import EditPage from "../Pages/Commerce/Edit-Page";
import { hasStore } from "../service/store";
import { Authentication } from "../utils/authentication";



interface Prop {
    type: string | null
}

const RouteCommerce = ({type}: Prop) => {
    console.log(type)
    const {setCommerce,getOrder, setCurrentUser, todoState} = useContext(TodoContext);
    const {mycommerce} = todoState;
    useAuth();
    useStore();


    useEffect(() => {
        //Notification
        const _getOrder = async () => {

            if(mycommerce?.id !== undefined){

                try {
                    const resp = await axios.get('http://localhost:3001/order/getOrder/' + mycommerce?.id)
                    getOrder(resp.data)
                    console.log(resp)
                } catch (error) {
                    console.log(error)
                }
            }
            
        }
        _getOrder()
    
    }, [mycommerce])
    return (
        <>
        {type === "Comerciante" 
        ?<Routes>
        
            <Route path='/' element={<CommercePage />}>
                
                <Route index element={<DashboardPage />}/>
                <Route path='edit' element={<EditPage />}/>
                <Route path='config/' element={<ConfigurePage />}>
                    <Route index element={<Configure />} />
                    <Route path='perfil' element={<EditPerfil />} />
                </Route>
                
            </Route> 
        </Routes>
            : <Navigate to='/home'/>
    }
            
        </>
    )
}


export default RouteCommerce;