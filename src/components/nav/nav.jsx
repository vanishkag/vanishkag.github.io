import React from 'react'
import './nav.css'
import {BiHomeAlt2} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <h1>VG</h1>
      <hr/>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}>About</a>
      <hr/>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#experience' ? 'active': ''}>Work</a>
      <hr/>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#portfolio' ? 'active': ''}>My Skills</a>
      <hr/>
      <a href='#contacts' onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active': ''}>Contact</a>
      <hr/>
    </nav>
  )
}

export default Nav