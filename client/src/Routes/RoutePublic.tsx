import { Route, Routes } from 'react-router-dom';
import CreateStore from '../Component/Commerce/CreateStore/CreateStore';
import { LoginPage } from '../Pages/LoginPage';
import LoRi from '../Pages/LoRi';
import { RegisterPage } from '../Pages/RegisterPage';

const RoutePublic = () => {
    return (
        <>
        <Routes>
            <Route  element={<LoRi />}>
                <Route path='login' element={<LoginPage />}/>
                <Route path='register' element={<RegisterPage />}/>
                <Route path='register-commerce' element={<CreateStore />}/>
            </Route>
        </Routes>
            
        </>
    )
}

export default RoutePublic;
