import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar';
import Cart from '../Cart';
import {HeroContainer,HeroContent,HeroBtn,HeroItems,HeroH1,HeroP} from './HeroElements'

const Hero = () => {
    const [isOpen,setIsOpen]= useState(false);
    const toggle = () => {setIsOpen(!isOpen)}

  return (
    <HeroContainer>
        <Navbar toggle={toggle} />
        <Cart />
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <HeroContent>
            <HeroItems>
                <HeroH1>Greatest Pizza Ever...</HeroH1>
                <HeroP>Ready in 15 mins.</HeroP>
                <HeroBtn>Place Order</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero