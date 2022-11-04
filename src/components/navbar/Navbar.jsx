import React from 'react'
import './Navbar.css'
import {FaUserAlt} from 'react-icons/fa'
import {GiWhiteBook} from 'react-icons/gi'
import {MdWorkOutline} from 'react-icons/md'
import {IoMdContact} from 'react-icons/io'
import {HiOutlineHome} from 'react-icons/hi'
import {useState} from 'react'

function Navbar() {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
    <a href='#' onClick={ () => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiOutlineHome /></a>
    <a href='#about' onClick={ () => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt /></a>
    <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiWhiteBook /></a>
    <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWorkOutline /></a>
    <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoMdContact /></a>
   </nav>
  )
}

export default Navbar