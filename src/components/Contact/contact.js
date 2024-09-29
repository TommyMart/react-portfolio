
import React from 'react'
import './contact.css'


const Contact = () => {
  return (
    <>
    <section id='contactPage'>
        <div className='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Let's chat! Please fill out the form below.</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name'></input>
                <input type='email' className='email' placeholder='Your Email'></input>
                <textarea name='message' rows="5" placeholder='Your Message' className='msg'></textarea>
                <button type='submit' values='Send' className='submitBtn'>Submit</button>
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