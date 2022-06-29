import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './Pages/LoginPage';
import { RegisterPage } from './Pages/RegisterPage';
import RoutePrivateClient from './Routes/RouteClient';
import RouteCommerce from './Routes/RouteCommerce';
import RoutePrivate from './Routes/RoutePrivate';

function App() {
  return (
      <Routes> 
          
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage />} />
        <Route path='commerce/*' element={
          <RoutePrivate>
            <RouteCommerce type="Comercio"/>
          </RoutePrivate>
        }/>
        
        <Route path='/inicio/*' element={
          <RoutePrivate>
            <RoutePrivateClient type='Comercio'/>
          </RoutePrivate>
        }/>
        
      
    </Routes>
  );
}

export default App;
