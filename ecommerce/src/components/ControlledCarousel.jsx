import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import books from "../books.json";
//import Book from "../components/Book.jsx";
import "./ControlledCarousel.css"

class CarouselComp extends Component {
  render() {
    return (
      <div className="Carousel">
        <Carousel autoPlay={false}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            width={"90%"}
            centerMode={true}
            centerSlidePercentage={30}
            swipeable={true}
            emulateTouch={true}>
          {books.slice(0,8).map((book, index) => (
                <div className="Carousel__item" key={index}>
                  <img src={`${process.env.PUBLIC_URL}/${book.imageLink}`} alt=""/>
                  <p className="legend">{book.title}</p>
                </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default CarouselComp;
