import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header2.css'


function Header2() {
    return (
        <div className='header2'>
            <NavLink className='link-h' to='/'> Home</NavLink>
            <NavLink className='link-h' to='/contact'> Contact</NavLink>
            <NavLink className='link-h' to='/about'> About</NavLink>
        </div>
    )
}

export default Header2;