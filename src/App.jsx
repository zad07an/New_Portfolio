import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Layouts from './Layouts/Layouts';
import About from './pages/About/About';
import UseScrollToTop from './Hooks/UseScrollToTop';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Contact from './pages/Contact/Contact';

function App() {

  const [theme, setTheme] = useState(false);
  const [menu, setMenu] = useState(false);

  const onShowMenu = () => setMenu(!menu);
  const onCloseMenu = () => setMenu(false);
  const themeSwitcher = () => {
    setTheme(!theme)
    onCloseMenu()
  };


  return (
    <div className="App">
      <UseScrollToTop/>
      <Routes>
        <Route element={<Layouts theme={theme} menu={menu} setMenu={setMenu} onShowMenu={onShowMenu} onCloseMenu={onCloseMenu} themeSwitcher={themeSwitcher}/>}>
          <Route path='/' element={<Home theme={theme} />} />
          <Route path='/about' element={<About theme={theme} />} />
          <Route path='/projects' element={<Projects theme={theme} />} />
          <Route path='/experience' element={<Experience theme={theme} />} />
          <Route path='/contact' element={<Contact theme={theme} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
