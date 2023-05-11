import './App.css';
import { useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React } from 'react';

import EmpresaDD from './Components/EmpresaDD';
import SaibaMais from './Components/SaibaMais';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Pages/Login';
import Registro from './Pages/Registro';


function App() {

  const [saibaMaisDD, setSaibaMaisDD] = useState(false);
  const [empresaDD, setEmpresaDD] = useState(false);

  return (
    <div className="App">

      <BrowserRouter>
        <Header
          saibaMaisDD={setSaibaMaisDD}
          empresaDD={setEmpresaDD} />
        {
          saibaMaisDD && <SaibaMais />
        }
        {
          empresaDD && <EmpresaDD />
        }

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Registro/>}/>
        </Routes>
      </BrowserRouter>



    </div>
  );
}



export default App;
