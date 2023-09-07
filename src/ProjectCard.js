import React from "react"
import {Link} from "react-router-dom"
// import { useNavigate } from "react-router-dom";
function Card(props){
   
  
  let handleBox = ()=> {
    let box = document.getElementById("#beforeBox")
    box.style.display = "inherit"
  }

  // box.addEventListener("onmousehover", handleBox)

    return (
    <>
        <a id="beforeBox">{props.content}</a>
      <div className="cards" onMouseEnter={handleBox}>
        
        <a href={props.link} target="_blank">
          <img className="cardimg" src={props.img} alt="no image" />
        </a>
       
        <div className="pjtText">
          <h1 className="name">{props.title}</h1>
        </div>
      </div>
    </>
    )
}

export default Card;