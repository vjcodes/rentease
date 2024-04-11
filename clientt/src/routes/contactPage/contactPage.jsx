import "./contactPage.scss";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2xq7jee', 'template_lsyiwmk', form.current, {
        publicKey: 'LCYmpTtmjvt_eX6t2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
  };

  return (
    <section class="contact" id="contact">
        <h2 class="heading">Get In <span>Touch!</span></h2>
        <form ref={form} onSubmit={sendEmail}>
            <div class="input-box">
                <input type="text" placeholder="Full Name" name="user_name"/>
                <input type="email" placeholder="Email Address"/>
            </div>
            <div class="input-box">
                <input type="number" placeholder="Contact Number" name="user_email"/>
                <input type="text" placeholder="Email Subject"/>
            </div>
            <textarea name="message" id="" cols="30" rows="8" placeholder="Your Message"></textarea>
            <input type="submit" value="Send" />
        </form>
    </section>
    // <form >
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
  );
};


export default ContactPage;