import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderNav from './Componentes/HeaderNav';
import Home from './paginas/Home';
import AboutMe from './paginas/AboutMe';

function App() {
  return (
    <BrowserRouter>

    <HeaderNav />
    
      <Routes>

        <Route path='/' element={ <Home /> } />
        <Route path='/AboutMe' element={ <AboutMe /> } />
        <Route path='*' />

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;