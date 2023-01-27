import React from 'react';
import { BrowserRouter,Route,Routes  } from 'react-router-dom';
import Navbar from './Components/Navbar'
import IniciarSesion from './Pages/IniciarSesion';
import Inicio from './Pages/Inicio';
import Pedidos from './Pages/Pedidos';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path = '/' element = {<Inicio/>}/> 
          <Route path = '/Pedidos' element = {<Pedidos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;