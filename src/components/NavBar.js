import React from 'react'
import { Logo } from './Logo';
import "../components-css/Logo.css"

export const NavBar = () => {
  const [about, experience, projects, contact] = ["About", "Experience", "Projects", "Contact"]
  const name = "aryan khatri";

  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  return (
    <div>
      {/* Desktop Navigation */}
      <nav className='desktop-nav' id='desktop-nav'>
        <span className='logo'><Logo/></span>
        <div>
          <ul className='nav-links'>
            <li><a href='/'>{about}</a></li>
            <li><a href='/'>{experience}</a></li>
            <li><a href='/'>{projects}</a></li>
            <li><a href='/'>{contact}</a></li>
          </ul>
        </div>
      </nav>

      {/* Hamburger Navigation */}
      <nav className='hamburger-nav' id='hamburger-nav'>
        <div className='logo'>{name.toUpperCase()}</div>
        <div className='hamburger-menu'>
          <div className='hamburger-icon' onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='menu-links'>
            <li><a href='/'>{about}</a></li>
            <li><a href='/'>{experience}</a></li>
            <li><a href='/'>{projects}</a></li>
            <li><a href='/'>{contact}</a></li>
          </div>
        </div>
      </nav>
    </div>
  )
}
