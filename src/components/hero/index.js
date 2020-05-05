import React from 'react';
import './style.css';
import Cards from '../UI/Cards';
import Logo from '../Logo';
import Navbar from '../Navbar';

const Hero = props =>{
    return(
        <Cards>
        <div class="hero-style">
        <Logo />
        <Navbar />
        </div>

        
        
        </Cards>
    )
}
export default Hero;