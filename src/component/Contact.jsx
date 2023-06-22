import React, { useRef } from 'react';
import axios from 'axios';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    axios.post('http://localhost:3001/api/contact', data)
      .then(response => console.log(response))
      .catch(error => console.log(error));
    form.current.reset();
  }

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option__icon'/>
            <h4>Email</h4>
            <h5>fabricemokfembam@gmail.com</h5>
            <a href='mailto:fabricemokfembam@gmail.com' target='_blank'>send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option__icon'/>
            <h4>LinkedIn</h4>
            <h5>Profile</h5>
            <a href='https://www.linkedin.com/in/brown-djomo-844b96164/' target='_blank'>Tape me on LinkedIn</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option__icon'/>
            <h4>Whatsapp</h4>
            <h5>Direct message</h5>
            <a href='https://web.whatsapp.com/send?phone=+237674010144' target='_blank'>Whatsapp me</a>
          </article>
        </div>
        <form ref={form} >
          <input type="text" name='name' placeholder='full name' required/>
          <input type="email" name='email' placeholder='your email' required/>
          <textarea name="message" id="message" cols="30" rows="10" placeholder='your message' required></textarea>
          <button type="submit" onClick={handleSubmit} className='btn btn-primary'>send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;