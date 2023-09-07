import React from "react";
// import { useEffect,useState } from "react";
import nav1 from "./images/nav-icon1.svg";
import nav2 from "./images/th-removebg-preview (1).png";
import nav3 from "./images/nav-icon3.svg";
// import { Link } from 'react-scroll';

// import dp from "./images/profile\ photo.jpg"
export default function Navbar() {
  // const [activelink, setActivelink] = useState('home');

  // const [scrolled, setscrolled] = useState(false);

  {
    /* <div 
    
  ></div> */
  }

  // useEffect(()=>{
  //     const onScroll = ()=>{
  //        if(window.scrollY > 50){
  //           setscrolled(true);
  //        }
  //        else{
  //         setscrolled(false);
  //        }
  //     }

  //     window.addEventListener("scroll",onScroll);

  //     return ()=> window.removeEventListener("scroll", onscroll);

  //     }, []);

  //     const onUpdateActiveLink = (value) =>{
  //        setActivelink(value);
  //     }

  //   const goto = ()=>{
  //     // window.scrollTo({top:1000, left: 0, behaviour: "smooth"});
  //     // document.querySelector('#p3').scrollTo(1000,0)
  //     console.log("called");
  //   };
  //   useEffect(() => {
  //     window.scroll(0, 1000);
  // }, [goto]);

  // className={activelink === "home"? 'active nav-link' : 'nav-link'}
  return (
    <div id="nav" style={{ backgroundColor: "transparent" }}>
      <p id="logo">Riya Bansal</p>
      <div className="texxt">
        <li
          className="navtext"
          onClick={() => {
            const anchorresume = document.querySelector("#page3");
            anchorresume.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
        >
          Resume
        </li>

        <li
          className="navtext"
          onClick={() => {
            const anchorskill = document.querySelector("#skillbox");
            anchorskill.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          Skills
        </li>

        <li
          className="navtext"
          onClick={() => {
            const anchor = document.querySelector("#page3");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          Projects
        </li>
      </div>
      <div className="navicons">
        <a href="#" target="_blank" className="icon">
          <img src={nav1} alt="error" />
        </a>
        <a href="https://github.com/Riya-78" target="_blank" id="billi">
          <img src={nav2} alt="error" />
        </a>
        <a
          href="https://www.instagram.com/?hl=en"
          target="_blank"
          className="icon"
        >
          {" "}
          <img src={nav3} alt="error" />
        </a>
      </div>

      <button className="btn">lets connect</button>
    </div>
  );
}
