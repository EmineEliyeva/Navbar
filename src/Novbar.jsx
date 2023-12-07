
import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './Novbar.css';
import About from './About';
import Contact from './Contact';
import Comando from './Comando';
import Home from './Home';

const Novbar = () => {
  const [click, setClick] = useState(false);

  const show = () => {
    setClick(!click);
  };

  return (
    <div>
      <div className="home">
        <div>
          <NavLink to='/'>Пингвины</NavLink>
        </div>
        <button onClick={show} className="menu">
           --- <br /> ---
        </button>
      </div>
      <div className={click ? 'menu-open' : 'menu-closed'}>
        <NavLink to='/about'>О нас!</NavLink> <br />
        <NavLink to='/contact'>Контакт</NavLink> <br />
        <NavLink to='/comando'>Команда!</NavLink>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/comando' element={<Comando />} />
      </Routes>
    </div>
  );
};

export default Novbar;