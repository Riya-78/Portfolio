import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";
import { Contact } from "./Contact";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 10);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "CPP Developer" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 3);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(50);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const handleClick = () => {
    <Link to={Contact} />
  }

  return (
    <section className="banner" id="home">
      <Container className="banner-content">
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Your Vision, My Code</span>
                <h1>{`Hi! I'm Riya`}<br></br> <span className="txt-rotate" dataPeriod="30" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>A passionate web developer dedicated to transforming ideas into digital realities. Whether you're looking to launch a stunning website, optimize your online presence, or develop a cutting-edge web application, I'm here to turn your vision into a pixel-perfect reality. Let's collaborate and bring your digital dreams to life.</p>
                  <Nav.Link href='#connect' id="banner-button-div">
                    <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </Nav.Link>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
