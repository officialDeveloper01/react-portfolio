import React from 'react';
import {FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'>
        <a href="https://github.com/officialDeveloper01" target='_blank'><FaGithub/></a>
        <a href='https://www.linkedin.com/in/jhambernaman/' target='_blank'><IoLogoLinkedin/></a>
        <a href='mailTo:namanprocoder@gmail.com' target='_blank'><GrMail/></a>
        <a href='https://instagram.com/jhambernaman' target='_blank'><FaInstagram/></a>
        <a href='https://twitter.com/_namanjain_1' target='_blank'><FaXTwitter/></a>
        <a href='https://wa.me/+919840339344' target='_blank'><FaWhatsapp/></a>
      </div>
    </footer>
  )
}

export default Footer