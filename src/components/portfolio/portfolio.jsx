import React from 'react'
import './portfolio.css'
import me from '../../assets/me-about.jpg'

const data = [
  {
    id: 1,
    image: me,
    title: 'Tic Tac Toe Game',
    github: 'https://github.com' 
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='container portfolio__descr'>
        <h4 className="h4_tag">&lt;h2&gt;</h4>
        <h2 className='h2_text'>My Portfolio</h2>
        <h4 className="h4_tag">&lt;/h2&gt;</h4>
        <br/>
        <br/>
        <h4 className="h4_tag">&lt;p&gt;</h4>
        <h4 className="p_text">Step into a carefully curated exhibition of my recent collaborations. 
        Although this gallery provides just a glimpse of my work, it showcases the diverse range of projects I've had the privilege to be part of. 
        Explore this collection as a window into the vast ocean of my creative endeavors.</h4>
        <h4 className="h4_tag">&lt;/p&gt;</h4>
        <br/>
      </div>

        <div className='container portfolio__container'>
          {
            data.map(({id, image, title, github}) =>{
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                    <figure>
                      <figcaption>{title}</figcaption>
                    </figure>
                  </div>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn-project' target='_blank'>GitHub</a>
                  </div>
                </article>
              )
            })
          }
        </div>
    </section>
  )
}

export default portfolio