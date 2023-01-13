import './sass/App.sass';
import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Register } from './pages/Register'
import { AuthContext } from './context/AuthContext';


function App() {
  const {user} = useContext(AuthContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element=
          {user ? <Home/> : <Register/>}
        />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
