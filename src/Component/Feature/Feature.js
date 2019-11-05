import React, { Component } from "react";
import { Row, Button } from "antd";
import $ from "jquery";
import "./Feature.scss";

class Feature extends Component {
  slideLocation = ["left", "center", "right"];
  item() {
    let feature = [];
    for (let i = 0; i < 3; i++) {
      feature.push(
        <div
          key={i}
          className={"slide slide-" + this.slideLocation[i]}
          data-active-class={"slide-" + this.slideLocation[i] + "-open"}
        >
          <div className="slide-wrapper">
            <div className="post">
              <div className="post-wrapper">
                <h2 className="post-title">
                  Do pariatur et cillum do ipsum pariatur exercitation.
                </h2>
                <p className="post-excerpt">
                  Dolor ad ipsum dolor occaecat dolor laboris ut velit. Pariatur
                  ex sint quis amet.
                </p>
              </div>
            </div>
            <div className="background-image-wrapper">
              <img
                className="background-image"
                src="http://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/public/field/field_image_main/shutterstock_450561199.jpg?itok=NL6qBaam"
              />
            </div>
          </div>
        </div>
      );
    }
    return feature;
  }
  render() {
    const wrapper = document.querySelector(".featureWrapper");
    const slides = [...document.querySelectorAll(".slide")];
    const active_classes = [
      "slide-left-open",
      "slide-center-open",
      "slide-right-open"
    ];

    slides.forEach(slide => {
      slide.addEventListener("mouseenter", e => {
        wrapper.classList.remove(...active_classes);
        let add_classes = ["slide-open", slide.dataset.activeClass];
        wrapper.classList.add(...add_classes);
      });
    });

    return (
      <div id="featureWrapper" className="featureWrapper">
        {this.item()}
      </div>
    );
  }
}

export default Feature;
