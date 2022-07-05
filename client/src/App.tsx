import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { TodoContext } from './Context/Context';
import { LoginPage } from './Pages/LoginPage';
import { RegisterPage } from './Pages/RegisterPage';
import RoutePrivateClient from './Routes/RouteClient';
import RouteCommerce from './Routes/RouteCommerce';
import RoutePrivate from './Routes/RoutePrivate';

function App() {
  const {todoState} = useContext(TodoContext);
  const {currentType} = todoState;

  console.log(currentType)
  return (
      <Routes> 
          
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage />} />
        <Route path='commerce/*' element={
          <RoutePrivate>
            <RouteCommerce type={currentType}/>
          </RoutePrivate>
        }/>
        
        <Route path='/inicio/*' element={
          <RoutePrivate>
            <RoutePrivateClient type={currentType}/>
          </RoutePrivate>
        }/>
        
      
    </Routes>
  );
}

export default App;
