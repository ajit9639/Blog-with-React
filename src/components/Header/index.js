import React from 'react'
import './style.css';
import {Navbar,NavLink,Router,Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    return (
        <header className="header">
            <nav className="header-menu">
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/post/1">post</a>
            </nav>
            <div class="my-icons">
            <span><FontAwesomeIcon icon="facebook" /></span>
            
            <span><FontAwesomeIcon icon={['fab', 'facebook']} /></span>
            <span><FontAwesomeIcon icon={['fab', 'instagram']} /></span>
            <span><FontAwesomeIcon icon={['fab', 'twitter']} /></span>
            <span><FontAwesomeIcon icon={['fab', 'linkedin']} /></span>
            <span><FontAwesomeIcon icon={['fab', 'github']} /></span>
            </div>
        </header>
    )
}
