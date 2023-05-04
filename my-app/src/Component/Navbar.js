import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <h1>PAges</h1>
            <div className='navlink'>
                <NavLink className='link' to='/'> Home</NavLink>
                <NavLink className='link' to='/contact'> Contact</NavLink>
                <NavLink className='link' to='/about'> About</NavLink>
            </div>
        </div>
    )
}

export default Navbar;