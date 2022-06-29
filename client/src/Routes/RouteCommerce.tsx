
import {Route, Routes,Navigate} from "react-router-dom";
import CommercePage from "../Pages/Commerce/Commerce-Page";
import ConfigurePage from "../Pages/Commerce/Configure-Page";
import DashboardPage from "../Pages/Commerce/Dashboard-Page";
import EditPage from "../Pages/Commerce/Edit-Page";
interface Prop {
    type: string | null
}

const RouteCommerce = ({type}: Prop) => {
    console.log(type)
    return (
        <>
        {type === "Comerciante" 
        ?<Routes>
        
            <Route path='/' element={<CommercePage />}>
                
                <Route index element={<DashboardPage />}/>
                <Route path='edite' element={<EditPage />}/>
                <Route path='config' element={<ConfigurePage />}/>
            </Route> 
        </Routes>
            : <Navigate to='/home'/>
    }
            
        </>
    )
}


export default RouteCommerce;