import React, { useState } from 'react'
import './header.css'
import ClearIcon from '@mui/icons-material/Clear';

function Header() {
  const[menubar,setMenubar]=useState(false)
  function showMenu(e){
    e.preventDefault()
      setMenubar(true)
  }

  function clearBar(e){
    e.preventDefault()
      setMenubar(false)
  }
  return (
    <>
      <header>
        <img src='Images/logo.svg' />
        <ul>
          <li><a href='#'>Model S</a></li>
          <li><a href='#'>Model 3</a></li>
          <li><a href='#'>Model X</a></li>
          <li><a href='#'>Model Y</a></li>
          <li><a href='#'>Solar Roof</a></li>
          <li><a href='#'>Solar Panels</a></li>
        </ul>
        <ul>
          <li><a href='#'>Shop</a></li>
          <li><a href='#'>Account</a></li>
          <li><a href='#' onClick={showMenu}>Menu</a></li>
        </ul>

      </header>

      <ul className='menubar' style={{right: (menubar===true) ? 0 :"-250px"}}>
        <li className='icon'><a href='#'>Model S</a><ClearIcon className='iconclear' onClick={clearBar}/></li>
        <li><a href='#'>Model 3</a></li>
        <li><a href='#'>Model X</a></li>
        <li><a href='#'>Model Y</a></li>
        <li><a href='#'>Solar Roof</a></li>
        <li><a href='#'>Solar Panels</a></li>
        <li><a href='#'>EXISTING Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade In</a></li>
        <li><a href='#'>Test Drive</a></li>
        <li><a href='#'>Powerwall</a></li>
        <li><a href='#'>Commercial energy</a></li>
      </ul>
    </>
  )
}

export default Header