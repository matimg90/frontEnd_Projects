import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import books from "../books.json";
import Book from "../components/Book.jsx";
import { Link } from "react-router-dom";
import "./ControlledCarousel.css"

class CarouselComp extends Component {
  render() {
    return (
      <div className="Carousel">
        <Carousel autoPlay={true}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            width={"17vw"}
            centerMode={true}
            swipeable={true}
            emulateTouch={true}>
          {books.map((book, index) => (
                <div className="Carousel__item" key={index}>
                  <img src={`${process.env.PUBLIC_URL}/${book.imageLink}`}/>
                  <p className="legend">{book.title}</p>
                </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default CarouselComp;
