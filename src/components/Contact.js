// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import "./Contact.css";
import React from "react";

const Contact = (props) => {
  const { photo, email, phone, name } = props.data;
  return (
    <div id="container">
      <div id="photo-container">
        <img src={photo} alt="" id="photo" />
      </div>
      <div id="contact-info-container">
        <div className="contact-info" id="name">
          {name}
        </div>
        <div className="contact-info" id="phone">
          {phone}
        </div>
        <div className="contact-info" id="email">
          {email}
        </div>
      </div>
    </div>
  );
};

export default Contact;
