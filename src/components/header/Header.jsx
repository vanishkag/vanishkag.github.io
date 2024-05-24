import React, { useState, useEffect } from 'react';
import './header.css';
import CTA from './CTA';
import useLoopedTypewriter from '../../hooks/typing-effect';

const Header = () => {
  const words = ['CS Undergrad', 'Web Developer', 'Keyboardist', 'Photographer'];
  const typingSpeed = 150;
  const pauseTime = 1000;
  const deletingSpeed = 300;

  const text = useLoopedTypewriter(words, typingSpeed, deletingSpeed);


  return (
    <header>
      <div className="container header__container">
        <h4 className="html_tag">&lt;html&gt;</h4>
        <br/>
        <br/>
        <h4 className="body_tag">&lt;head&gt;</h4>
        <br/>
        <h4 className="h4_tag">&lt;h1&gt;</h4>

        <h1 className='h1_text'>Hi,</h1>
        <br/>
        <h1 className='h1_text'>I'm Vanishka<br/>
         A {text}
        </h1>
        <h4 className="h4_tag">&lt;/h1&gt;</h4>
        <br/>
        <br/>
        <h4 className="h4_tag">&lt;p&gt;</h4>
        <h4 className="p_text">CS Undergrad | Web Developer | AI Enthusiast | Keyboardist</h4>
        <h4 className="h4_tag">&lt;/p&gt;</h4>
        <br/>
        <h4 className="body_tag">&lt;/head&gt;</h4>
        
      </div>
    </header>
  );
}

export default Header;
