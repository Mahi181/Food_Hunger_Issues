import React from 'react'
import Navbar from "../components/Navbar";
import "./Contact.css"; 
export default function About() {
  return (
    <>
    <div className="contact-container">
      <Navbar />
      <div className="container">
        <section className="m-3">
          <form id="contact-form" name="contact-form" >
          <h1 className="h1-responsive font-weight-bold text-center my-4"> <u> About us</u> </h1>
          <h4 className="text-center w-responsive mx-4 mb-3">Welcome to our Food Delivery App! We are passionate about bringing delicious meals right to your doorstep. With our wide selection of cuisines and restaurants, we strive to provide a convenient and enjoyable dining experience for our customers. 
          Whether you're craving a hearty burger, a fresh salad, or authentic international cuisine, our app has got you covered. Our dedicated team works closely with local restaurants to ensure that every order is prepared with the utmost care and delivered to you in a timely manner.
           We prioritize quality, taste, and customer satisfaction, guaranteeing that each meal is made with the freshest ingredients and cooked to perfection. With user-friendly features and a seamless ordering process, we aim to make your food delivery experience hassle-free and enjoyable.
            Join us on this culinary journey and let us satisfy your cravings with our wide range of delectable dishes. 
            Thank you for choosing our Food Delivery App <u>HUNGER-ISSUES</u> - your ultimate destination for a delightful dining experience !!!   For any query please visit our contact page.</h4>

            </form>
         
        </section>
      </div>
    </div>
  </>
  )
}
