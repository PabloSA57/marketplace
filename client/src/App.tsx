import { useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Response from './Component/Commerce/Configure/Component/Response/Response';
import { TodoContext } from './Context/Context';
import { useSize } from './hooks/useSize';
import RoutePrivateClient from './Routes/RouteClient';
import RouteCommerce from './Routes/RouteCommerce';
import RoutePrivate from './Routes/RoutePrivate';
import RoutePublic from './Routes/RoutePublic';

function App() {
  const {todoState} = useContext(TodoContext);
  const {currentType} = todoState;
  useSize();
  
  console.log(currentType)
  useEffect(() => {
    console.log('aqui App')
  }, [])
  return (
      <Routes> 

      
      <Route path='/response-mp' element={<Response />}/>

      <Route path='/*' element={<RoutePublic />} >

      </Route>
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
