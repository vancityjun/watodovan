import React, { Component } from "react";
import "./MenuIcon.scss";
class MenuIcon extends Component {
  render() {
    return (
      <>
        <input className="menu-trigger hidden" id="togglenav" type="checkbox" />
        <label className="burger-wrapper" for="togglenav">
          <div className="hamburger"></div>
        </label>
      </>
    );
  }
}

export default MenuIcon;
