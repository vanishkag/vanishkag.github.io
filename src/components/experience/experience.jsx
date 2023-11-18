import React from 'react'
import './experience.css'
import {BiSolidBadgeCheck} from 'react-icons/bi'

const experience = () => {
  return (
<section id='experience'>
  <div className='container experience__heading'>
    <h4 className="h4_tag">&lt;h2&gt;</h4>
    <h2 className='h2_text'>My Skills & Experience</h2>
    <h4 className="h4_tag">&lt;/h2&gt;</h4>
    <br/>
    <br/>
    <br/>
  </div>

  <div>
    <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
            <article className='experience__details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiSolidBadgeCheck className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>

      <div className='experience__backend'>
      <h3>Backend Development</h3>
      <div className='experience__content'>
          <article className='experience__details'>
            <BiSolidBadgeCheck className='experience__details-icon'/>
            <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Beginner</small>
            </div>
          </article>
          <article className='experience__details'>
            <BiSolidBadgeCheck className='experience__details-icon'/>
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Beginner</small>
            </div>
          </article>
          <article className='experience__details'>
            <BiSolidBadgeCheck className='experience__details-icon'/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BiSolidBadgeCheck className='experience__details-icon'/>
            <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default experience