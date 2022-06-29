import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import {FaFacebook,  FaInstagram, FaLinkedinIn} from "react-icons/fa"

import "./style.css";

export const Contact = () => {
  return (
    <div>
      <h1 className="title-contact">Contact Me</h1>
      <div className="info-contacts">
        <div className="contact-wrapper">
          <i>
            <BsTelephone />
          </i>
          <div className="contact-info">
            <span>Call me</span>
            <span  className="gray-text">05024272822</span>
          </div>
        </div>
        <div className="contact-wrapper">
          <i>
            <AiOutlineMail />
          </i>
          <div className="contact-info">
            <span>Email</span>
            <span className="gray-text">turik.olexandra@gmail.com</span>
          </div>
        </div>
        <div className="contact-wrapper">
          <i>
            <GoLocation />
          </i>
          <div className="contact-info">
            <span>Location</span>
            <span className="gray-text">Ukraine, Chernivtsi city</span>
          </div>
        </div>
      </div>
      <div class="media-icons">
        <a href="https://www.facebook.com/malyshka.OIexandra"><i className="social-media"> < FaFacebook/></i></a>
        <a href="https://instagram.com/oleksandra_tur?igshid=YmMyMTA2M2Y="><i className="social-media"> < FaInstagram/></i></a>
        <a href="https://www.linkedin.com/in/oleksandra-turik-33b092220"><i className="social-media"> < FaLinkedinIn/></i></a>
      </div>
    </div>
  );
};
