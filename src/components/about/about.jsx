import React from 'react'
import './about.css'
import me from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const about = () => {
  return (
    <section id='about'>
      <div className='container about__container'>
        <h4 className="h4_tag">&lt;h2&gt;</h4>
        <h2 className='h2_text'>About Me</h2>
        <h4 className="h4_tag">&lt;/h2&gt;</h4>
        <br/>
        <br/>
        <h4 className="h4_tag">&lt;p&gt;</h4>
        <br/>
        <h4 className="p_text">Hello! I'm a motivated third-year computer science student with a strong passion for data and web development technologies. Throughout my academic journey, I've delved deep into programming languages, data structures, and web technologies, and I'm excited about the endless possibilities they offer. I've also had the privilege of working on projects that involve data analysis, web application development, and more. My goal is to combine my technical skills with a problem-solving mindset to create meaningful solutions. I'm actively seeking internships and collaborative opportunities to further hone my skills and contribute to the ever-evolving tech landscape.</h4>
        <br/>
        <h4 className="h4_tag">&lt;/p&gt;</h4>

      </div>
    </section>
  )
}

export default about

{/*<h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>Info about me</p>
          <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
        </div>
  </div>*/}