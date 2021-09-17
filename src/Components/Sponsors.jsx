import React from 'react'
import Carousel from "react-multi-carousel";
import SpecialTitle from './SpecialTitle';
import "react-multi-carousel/lib/styles.css";
import "../assets/css/sponsors.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Sponsors() {
    return (
        <>
          <SpecialTitle title="Polos" subTitle="Parceiros"/>
          <div id="carousel">
              <Carousel
              
              swipeable={false}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true }
              autoPlaySpeed={2000}
              keyBoardControl={false}
              customTransition="all 1s"
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile","superLargeDesktop","desktop"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              >
                  <div className="sponsorItem s1"></div>
                  <div className="sponsorItem s2"></div>
                  <div className="sponsorItem s3"></div>
                  <div className="sponsorItem s4"></div>
                  {/* <div className="sponsorItem s5"></div> */}
                  <div className="sponsorItem s6"></div>
                  <div className="sponsorItem s7"></div>
                  <div className="sponsorItem s8"></div>
                  <div className="sponsorItem s9"></div>
                  <div className="sponsorItem s10"></div>
                  <div className="sponsorItem s11"></div>
                  <div className="sponsorItem s12"></div>
                  <div className="sponsorItem s13"></div>
                  <div className="sponsorItem s14"></div>
                  {/* <div className="sponsorItem s15"></div> */}
                  <div className="sponsorItem s16"></div>
                  <div className="sponsorItem s17"></div>
                  {/* <div className="sponsorItem s18">Item 18</div>
                  <div className="sponsorItem s19">Item 19</div> */}
              </Carousel>
          </div>
        </>
    )
}

export default Sponsors;
