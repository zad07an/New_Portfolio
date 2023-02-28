import React, { useEffect, useState } from 'react'
import { FaRegMoon, ImSun } from 'react-icons/all'
import { Link, NavLink } from 'react-router-dom'
import { Fade as Hamburger } from 'hamburger-react'
import './Header.css'

export default function Header({ theme, themeSwitcher, onShowMenu, onCloseMenu, menu, setMenu }) {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    })

    return () => window.removeEventListener('scroll', () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    })
  }, [])

  menu ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto'
  
  const showMenu = menu && !sticky ? 'show_menu' : menu && sticky ? 'sticky_show_menu' : null;
  const isActiveLink = ({ isActive }) => (isActive ? 'isActive' : sticky ? 'is_sticky_font' : 'nav_link')
  const stickyStyle = sticky ? 'is_sticky' : '';
  const stickyFonts = {color: sticky ? 'black' : 'white'};

  return (
    <>
      <header className={`header ${stickyStyle}`}>
        <nav className='nav'>
          <Link to="/" className="logo" style={stickyFonts}>Zadoyan</Link>
          <div className={`nav_items ${showMenu}`}>
            <ul className="nav_menu">
              <li className="nav_list">
                <NavLink to="/" className={isActiveLink}  onClick={onCloseMenu} >Home</NavLink>
              </li>
              <li className="nav_list">
                <NavLink to='/about' className={isActiveLink} onClick={onCloseMenu} >About</NavLink>
              </li>
              <li className="nav_list">
                <NavLink to="/projects" className={isActiveLink} onClick={onCloseMenu} >Projects</NavLink>
              </li>
              <li className="nav_list">
                <NavLink to="/experience" className={isActiveLink} onClick={onCloseMenu} >Experience</NavLink>
              </li>
              <li className="nav_list">
                <NavLink to="/contact" className={isActiveLink} onClick={onCloseMenu} >Contact</NavLink>
              </li>
              <div className="theme_switcher" style={stickyFonts} onClick={themeSwitcher}>
                {theme ? <ImSun/> : <FaRegMoon/>}
              </div>
            </ul>
          </div>
          <div className="hamburger_menu" onClick={onShowMenu}>
            <Hamburger color={sticky ? 'black' : 'white'} toggled={menu} size={30}/>
          </div>
        </nav>
      </header>
    </>
  )
}
