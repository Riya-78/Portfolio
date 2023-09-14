import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ecommerce.png";
import projImg2 from "../assets/img/candy-game.png";
import projImg3 from "../assets/img/solitare-game.png";
import projImg4 from "../assets/img/todolist.png";
import projImg5 from "../assets/img/alarm.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Shopfy",
      description: "React.Js, Javascript",
      imgUrl: projImg1,
      link: "https://riya-store.vercel.app/"
    },
    {
      title: "Candy Crush Saga",
      description: "HTML, CSS, JS",
      imgUrl: projImg2,
      link: "https://candy-crush-riya.vercel.app/"
    },
    {
      title: "Black Jack",
      description: "HTML, CSS, JS",
      imgUrl: projImg3,
      link: "https://riya-black-jack-game.vercel.app/"
    },
    {
      title: "Todo List",
      description: "HTML, CSS, JS",
      imgUrl: projImg4,
      link: "https://riya-todo-list.vercel.app/"
    },
    {
      title: "Alarm Clock",
      description: "HTML, CSS, JS",
      imgUrl: projImg5,
      link: "https://riya-alarm-clock.vercel.app/"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>From eye-catching landing pages that captivate audiences to complex web applications that streamline business processes, my work spans a diverse range of industries. Browse through my portfolio to witness how I've transformed ideas into beautifully functional online experiences.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="proj-list">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
