import React from "react";
import Card from "./ProjectCard.js";

// import { useNavigate } from "react-router-dom"

export default function Page() {
  // const navigate = useNavigate();
  return (
    <>
      <div id="page3">
        <div id="title">Projects</div>

        <div className="container">
          <div className="firstthree">
            <Card
              link={"https://candy-crush-six.vercel.app/"}
              title={"Candy Crush"}
              img={require("./images/Candy.png")}
              content="first box"
            />
            <Card
              // link={"https://black-jack-game-eight.vercel.app/"}
              title={"BlackJack game"}
              img={require("./images/bjack.png")}
            />
            <Card
              // link={"https://candy-crush-six.vercel.app/"}
              title={"alarm"}
              img={require("./images/alarm.png")}
            />
          </div>

          <div className="lastTwo">
            <Card
              // link={"https://candy-crush-six.vercel.app/"}
              title={"todo"}
              img={require("./images/todo.png")}
            />

            <Card title={"todo"} img={require("./images/todo.png")} />
          </div>
        </div>
      </div>
    </>
  );
}
