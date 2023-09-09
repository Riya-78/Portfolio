import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from './images/meter1.svg'
import img2 from './images/meter2.svg'
import img3 from './images/meter3.svg'
 const Skills = () => {
 const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3

  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2

  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1

  }
  };
  return(
   
        <div id="skillbox">
            <h2>Skills</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem est nostrum veniam possimus quae aperiam quibusdam consectetur similique nihil hic officia, aliquid eaque odio tempore quaerat. Iure laborum id hic.</p>

            <Carousel  responsive={responsive} infinite={true} className="skill-slider">
   
                <div className="item">
                    <img src={img1} alt="error" />
                    <h4>Web Dev</h4>
                </div>
                <div className="item">
                    <img src={img2} alt="error" />
                    <h4>DSA</h4>
                </div>
                <div className="item">
                    <img src={img3} alt="error" />
                    <h4>DSA</h4>
                </div>
                <div className="item">
                    <img src={img3} alt="error" />
                    <h4>WebD</h4>
                </div>
                <div className="item">
                    <img src={img3} alt="error" />
                    <h4>WebD</h4>
                </div>
            </Carousel>
        </div>
  
  )
}

export default Skills;

