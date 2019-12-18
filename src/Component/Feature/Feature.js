import React, { Component } from "react";
import { Row, Button } from "antd";
import Swiper from "swiper";
import "../../../node_modules/swiper/css/swiper.min.css";
import "./Feature.scss";

class Feature extends Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1.3,
      mousewheel: {
        sensitivity: 3
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide" style={{ background: "#955" }}></div>
          <div className="swiper-slide" style={{ background: "#595" }}></div>
          <div className="swiper-slide" style={{ background: "#559" }}></div>
          <div className="swiper-slide" style={{ background: "#955" }}></div>
          <div className="swiper-slide" style={{ background: "#595" }}></div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    );
  }
}

export default Feature;
