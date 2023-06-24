import React, { useRef } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
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

    const serviceId = 'service_9k43vsr'; // replace with your EmailJS service ID
    const templateId = 'template_ia2gp4f'; // replace with your EmailJS template ID
    const userId = '_Q0x4HHBaxrgFPfw9'; // replace with your EmailJS user ID

    emailjs.send(serviceId, templateId, data, userId)
      .then(response => {
        console.log('Email sent!', response.status, response.text);
      })
      .catch(error => {
        console.log('Email failed to send.', error);
      });

    axios.post('http://localhost:3001/api/contact', data)
      .then(response => {
        console.log('Data sent!', response.data);
      })
      .catch(error => {
        console.log('Data failed to send.', error);
      });

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
          <article className='contact__option marg'>
            <AiOutlineLinkedin className='contact__option__icon '/>
            <h4>LinkedIn</h4>
            <h5>Profile</h5>
            <a href='https://www.linkedin.com/in/brown-djomo-844b96164/' target='_blank'>Tape me on LinkedIn</a>
          </article>
          <article className='contact__option marg'>
            <BsWhatsapp className='contact__option__icon '/>
            <h4>Whatsapp</h4>
            <h5>Direct message</h5>
            <a href='https://web.whatsapp.com/send?phone=+237674010144' target='_blank'>Whatsapp me</a>
          </article>
        </div>
        <form ref={form}>
          <input type="text" name="name" placeholder="Full name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" required></textarea>
          <button type="submit" onClick={handleSubmit} className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;