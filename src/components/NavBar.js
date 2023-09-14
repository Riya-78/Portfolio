import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/signature.png';
import linkedin from "../assets/img/linkedin-logo.png";
import github from "../assets/img/github-logo.png";
import instagram from "../assets/img/instagram-logo.png";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Link } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className="banner-container">
          <HashLink to="#home" className="logo-a">
            <img src={logo} alt="Logo" className="logo" />
          </HashLink>
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-phone">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/Riya-78" target="_blank"><img src={github} alt="Icon"/></a>
                <a href="https://www.linkedin.com/in/riya-bansal-910377212/" target="_blank"><img src={linkedin} alt="Icon" /></a>
                <a href="https://www.instagram.com/_riya._b/" target="_blank"><img src={instagram} alt="Icon" /></a>
              </div>
              
              <a href="resume.pdf" target="_blank"><button className="vvd"><span>My Resume</span></button></a>
              
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
