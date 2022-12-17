import React from 'react'
import { FaRegMoon, ImSun } from 'react-icons/all'
import { Link, NavLink } from 'react-router-dom'
import { Fade as Hamburger } from 'hamburger-react'
import './Header.css'

export default function Header({ theme, themeSwitcher, onShowMenu, onCloseMenu, menu, setMenu }) {

  menu ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto'

  // const darkHeader = { background: theme ? '#311169' : '#7A3BE4' }
  const darkHeader = { background: theme ? '#000' : '#000' }
  const showMenu = menu ? 'show_menu' : '';
  const isActiveLink = ({ isActive }) => (isActive ? 'isActive' : 'nav_link')

  return (
    <>
      <header className='header' style={darkHeader}>
        <nav className='nav'>
          <Link to="/" className="logo">Zadoyan</Link>
          <div className={`nav_items ${showMenu}`}>
            <ul className="nav_menu">
              <li className="nav_list"><NavLink to="/" className={isActiveLink}  onClick={onCloseMenu}>Home</NavLink></li>
              <li className="nav_list"><NavLink to='/about' className={isActiveLink} onClick={onCloseMenu}>About</NavLink></li>
              <li className="nav_list"><NavLink to="/projects" className={isActiveLink} onClick={onCloseMenu}>Projects</NavLink></li>
              <li className="nav_list"><NavLink to="/experience" className={isActiveLink} onClick={onCloseMenu}>Experience</NavLink></li>
              <li className="nav_list"><NavLink to="/contact" className={isActiveLink} onClick={onCloseMenu}>Contact</NavLink></li>
              <div className="theme_switcher" onClick={themeSwitcher}>
                {theme ? <ImSun/> : <FaRegMoon/>}
              </div>
            </ul>
          </div>
          <div className="hamburger_menu" onClick={onShowMenu}>
            <Hamburger color='white' toggled={menu} size={30}/>
          </div>
        </nav>
      </header>
    </>
  )
}
