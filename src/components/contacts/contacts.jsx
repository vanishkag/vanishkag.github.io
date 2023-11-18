import React from 'react'
import './contacts.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {MdOutlineWhatsapp} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2w0p6jm', 'template_sksvk5e', form.current, 'aT4m88TTMxLnAGnNi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contacts'>
      <div className='container contact__descr'>
        <h4 className="h4_tag">&lt;h2&gt;</h4>
        <h2 className='h2_text'>Contact Me</h2>
        <h4 className="h4_tag">&lt;/h2&gt;</h4>
        <br/>
        <br/>
        <h4 className="h4_tag">&lt;p&gt;</h4>
        <h4 className="p_text">I am actively pursuing freelance opportunities, with a particular interest in engaging with ambitious and large-scale projects. 
        If you have any queries or specific requests, please don't hesitate to contact me using the provided form. 
        I am open to exploring various forms of collaboration and am enthusiastic about discussing how I can make a meaningful contribution to your project.
        Let's connect and bring your ideas to life!</h4>
        <h4 className="h4_tag">&lt;/p&gt;</h4>
        <br/>
      </div>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            {/*<MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vanishka.s.gupta@gmail.com</h5>*/}
            <a href="mailto:vanishka.s.gupta@gmail.com" target='_blank'><MdOutlineMailOutline className='contact__option-icon'/></a>
          </article>

          <article className="contact__option">
            {/*<BsLinkedin className='contact__option-icon'/>
            <h4>LinekdIn</h4>
            <h5>Vanishka Gupta</h5>*/}
            <a href="https://linkedin.com/in/vanishka-gupta" target='_blank'><BsLinkedin className='contact__option-icon'/></a>
          </article>

          <article className="contact__option">
            {/*<MdOutlineWhatsapp className='contact__option-icon'/>
            <br/>*/}
            <a href="https://api.whatsapp.com/send?phone=918951886324" target='_blank'><MdOutlineWhatsapp className='contact__option-icon'/></a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn-send'>Send Message</button>
        </form>
      </div>

      <div className='container end__tags'>
        <h4 className="body_tag">&lt;/body&gt;</h4>
        <br/>
        <h4 className="html_tag">&lt;/html&gt;</h4>
        <br/>
      </div>
    </section>
  )
}

export default Contacts