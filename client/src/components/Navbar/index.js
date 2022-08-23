import React from 'react'
import { Nav,NavLink,NavIcon,Bars,Cart,NavIconLeft } from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <Nav> 
        <NavIconLeft onClick={toggle}><Cart/></NavIconLeft>
        <NavLink to='/'>PIZZZAAAA DIET</NavLink>
        <NavIcon onClick={toggle}><p>Menu</p><Bars/></NavIcon>
    </Nav>
  )
}

export default Navbar
