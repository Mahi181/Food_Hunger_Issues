import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Contact.css"; 

export default function Contact() {
  

  

  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jvxpt4f', 'template_6g5rzdp', form.current, 'vrR_2ktZ0GiFNBfPa')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
       
          alert('Your query has been sent!');
          window.location.reload(); 

      }, (error) => {
          console.log(error.text);
          

      });
  };
  return (
    <>
      <div className="contact-container">
        <Navbar />
        <div className="container">
          <section className="m-3">
            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
            <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>

            <div className="row">
              <div className="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" ref={form} onSubmit={sendEmail}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your name</label>
                      <input type="text" id="name" name="user_name" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="email">Your email</label>
                      <input type="text" id="email" name="user_email" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Your message</label>
                    <textarea id="message" name="message" rows="4" className="form-control"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send</button>
                </form>
                <div className="status"></div>
              </div>
              <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Noida, Plot-189, INDIA</p>
                  </li>
                  <li>
                    <i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+91 6388670656</p>
                  </li>
                  <li>
                    <i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>jainmahiman@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
