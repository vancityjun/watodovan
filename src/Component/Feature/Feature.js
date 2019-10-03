import React, { Component } from "react";
import { Row, Button } from "antd";
import $ from "jquery";
import "./Feature.scss";

class Feature extends Component {
  style = {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(" +
      require("../img/event1.jpg") + //change images
      ") no-repeat center",
    backgroundSize: "cover"
  };
  item() {
    let feature = [];
    for (let i = 0; i < 3; i++) {
      feature.push(
        <div className={"featureItem item" + i}>
          <div>
            <div className="featureInfo">
              {/* title */}
              <h3>Amazing Scavenger Hunt Adventure</h3>
              {/* description */}
              <div className="featureText">
                Turn Vancouver into a giant game board with this fun scavenger
                hunt adventure. Combine the excitement of the Amazing Race with
                a three-hour
              </div>
              <Button ghost size="large" className="featureButton">
                View event
              </Button>
            </div>
          </div>
        </div>
      );
    }
    return feature;
  }
  componentDidMount() {
    const featureOpen = () => {
      $(".item2").addClass("active");
    };
    featureOpen();
    $(".item").on("mouseover", () => {
      $(this).addClass("active");
      $(this)
        .siblings()
        .removeClass("active");
      $(".item").hasClass("active")
        ? $(this)
            .children(".featureInfo")
            .fadeIn(600)
        : $(this)
            .children(".featureInfo")
            .fadeOut(600);
    });
  }
  render() {
    return (
      <div id="featureWrapper" className="featureWrapper">
        {this.item()}
      </div>
    );
  }
}

export default Feature;
