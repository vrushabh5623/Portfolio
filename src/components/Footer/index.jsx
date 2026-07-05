import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

import './index.css'

const Footer = () =>{
  return(
    <div className="footer-bg">
      <ul className="un-list">
        <a href='https://www.linkedin.com/in/vrushabh-lanjewar-264b772ab/' className="footer-icon"><FaLinkedinIn /></a>
        <a href='https://github.com/vrushabh5623' className="footer-icon"><IoLogoGithub /></a>
        <a href='https://x.com/Vrushabhlanjewr' className="footer-icon"><IoLogoTwitter /></a>
        <a href='' className="footer-icon"><FaFacebookF /></a>
        <a href='https://www.instagram.com/vrushabh_lanjewar/' className="footer-icon"><FaInstagram /></a>
      </ul>
    </div>
  )
}
export default Footer;