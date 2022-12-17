import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

export default function Layouts({ theme, themeSwitcher, menu, setMenu, onShowMenu, onCloseMenu}) {
  return (
    <>
      <Header theme={theme} themeSwitcher={themeSwitcher} menu={menu} setMenu={setMenu} onShowMenu={onShowMenu} onCloseMenu={onCloseMenu} />
      <Outlet/>
    </>
  )
}
