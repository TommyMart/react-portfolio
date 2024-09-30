
import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wg8j5py', 'template_8rvxt36', form.current, {
        publicKey: 'vOclEW_YSx6dM_1Fi',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
          alert('Success! Your email has been sent.')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <section id='contactPage'>
        <div className='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Let's chat! Please fill out the form below to get in touch.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name' required></input>
                <input type='email' className='email' placeholder='Your Email' name='from_email' required></input>
                <textarea name='message' rows="5" placeholder='Your Message' className='msg' required></textarea>
                <button type='submit'  className='submitBtn'>Submit</button>
            </form>
          <div className='infoSection'>
            <p className='contactInfo'>Thomas Martin</p>
            <p className='contactInfo'>thomas.h.martin89@gmail.com</p>
            <p className='acknowledge'>I acknowledge the Kaurna people, the original custodians of the lands on which this website was built, and that sovereignty was never ceded.</p>
          </div>
        </div>

    </section>

    {/* <div className='logoLinks'>
              <a href="https://github.com/TommyMart" target="_blank" rel="noopener noreferrer">
              <img src={github} alt='Express' className='techLinks' />
              </a>
              <a href="https://www.linkedin.com/in/tom-martin-9b24a4103" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt='Express' className='techLinks' />
              </a>
              </div> */}
    </>
  )
}

export default Contact;