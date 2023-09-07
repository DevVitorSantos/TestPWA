import React from 'react'
import styles from './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <ul>
        <li>
            <NavLink to='/'>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/sobre'>
                Sobre
            </NavLink>
        </li>
        <li>
            <NavLink to='/dashboard'>
                Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink to='/login'>
                Login
            </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
