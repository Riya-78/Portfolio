import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/signature.png";
import phone from "../assets/img/phone-logo.png";
import gmail from '../assets/img/gmail-logo.png';
import linkedin from "../assets/img/linkedin-logo.png";
import github from "../assets/img/github-logo.png";
import instagram from "../assets/img/instagram-logo.png";

export const Footer = () => {
  return (
    <footer className="footer">

          <p>Thanks for visiting Riya's Portfolio</p>
          
          <img src={logo} alt="Logo" className="logo"/>

          <div className="social-icon">
              <a href="#"><img src={phone} alt="Icon" /></a>
              <a href="#"><img src={gmail} alt="Icon" /></a>
              <a href="#"><img src={github} alt="Icon" /></a>
              <a href="#"><img src={linkedin} alt="Icon" /></a>
              <a href="#"><img src={instagram} alt="Icon" /></a>
          </div>
            
    </footer>
  )
}
