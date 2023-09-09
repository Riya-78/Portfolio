import React from "react"
// import {Link} from "react-router-dom"
// import { useNavigate } from "react-router-dom";
function Card(props){

    return (
    <>

      <div className="cards">
        
      <a href={props.link} target="_blank">
          <img className="cardimg" src={props.img} alt="no image" />
        <div className="pjtText">
          <h1 className="name">{props.title}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. blah blah blah </p>
        </div>
      </a>

      </div>
    </>
    )
}

export default Card;