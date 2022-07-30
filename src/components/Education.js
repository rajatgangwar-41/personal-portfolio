import meter1 from "D:/Projects/personal-portfolio/src/assets/images/meter1.svg";
import meter2 from "D:/Projects/personal-portfolio/src/assets/images/meter2.svg";
import meter3 from "D:/Projects/personal-portfolio/src/assets/images/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "D:/Projects/personal-portfolio/src/assets/images/arrow1.svg";
import arrow2 from "D:/Projects/personal-portfolio/src/assets/images/arrow2.svg";
import colorSharp from "D:/Projects/personal-portfolio/src/assets/images/color-sharp.png"

export const Education = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="education" id="educations">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="education-bx wow zoomIn">
                        <h2>Education</h2>
                        <br/>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme education-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>10th</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>12th</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>B-Tech</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}