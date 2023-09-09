import React from "react";
import Headerimg from './images/header-img.svg'
// import Navbar from './Navbar.js';

export default function Bg(){
    return (
    <>
      {/* <Navbar/> */}
    <div className="box">
      <div className="left">
       {/* <p id="wlcm">welcome to my portfolio</p> */}
       <h1 id="heading">Hi I'm a Frontend Developer</h1>
       <p className="lines">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit praesentium optio nam nemo corrupti vel itaque qui modi omnis ex.
       </p>
      </div>
       <div className="man">
        <img src={Headerimg} alt="error" />
       </div>
    </div>
    </>
    )
}