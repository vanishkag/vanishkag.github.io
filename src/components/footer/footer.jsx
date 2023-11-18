import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LOGO</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/vanishka-gupta"><BsLinkedin/></a>
        <a href="https://github.com/vanishkag"><FaGithub/></a>
        <a href="https://twitter.com"><FaSquareXTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>Designed and Developed by Vanishka Gupta &copy;</small>
      </div>
    </footer>
  )
}

export default footer