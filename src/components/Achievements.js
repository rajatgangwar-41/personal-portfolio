import meter1 from "D:/Projects/personal-portfolio/src/assets/images/Achievements-1.png";
import meter2 from "D:/Projects/personal-portfolio/src/assets/images/Achievements-2.png";
import meter3 from "D:/Projects/personal-portfolio/src/assets/images/Achievements-3.png";
import meter4 from "D:/Projects/personal-portfolio/src/assets/images/Achievements-4.png";
import meter5 from "D:/Projects/personal-portfolio/src/assets/images/Achievements-5.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "D:/Projects/personal-portfolio/src/assets/images/arrow1.svg";
import arrow2 from "D:/Projects/personal-portfolio/src/assets/images/arrow2.svg";
import colorSharp from "D:/Projects/personal-portfolio/src/assets/images/color-sharp.png"

export const Achievements = () => {
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
    <section className="achievement" id="achievements">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="achievement-bx wow zoomIn">
                        <h2>Achievements</h2>
                        <br/>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme achievement-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Codechef</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Codechef-Starter 37 2022 Divison 2</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Codechef-April Long Two 2022 Division 3</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Codechef-May Cook-Off 2022 Division 2</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Bharat Ko Jano-National Level Quiz Competition</h5>
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