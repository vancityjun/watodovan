import React, { Component } from "react";
<<<<<<< HEAD
import { Menu, Input, DatePicker, Icon } from "antd";
import Selection from "../Selection/Selection";
// import MenuIcon from "../MenuIcon/MenuIcon";
class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <img src={require("../../asset/watodo-logo.png")} alt="watodo logo" />
        </div>
        <div className="searchBar">
          <Input.Search placeholder="Search Event" />
        </div>
        <Icon type="filter" />
        {/* <Menu.Item>
=======
import { Menu, Input, DatePicker } from "antd";
import Selection from "../Selection/Selection";
class NavBar extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item>
          <img
            className="logo"
            src={require("../../asset/watodo-logo.svg")}
            alt="watodo logo"
          />
        </Menu.Item>
        <Menu.Item>
          <Input.Search placeholder="Search Event" />
        </Menu.Item>
        <Menu.Item>
>>>>>>> 7dbc2b0ef543c252038cda4ecaf7f61d24196eba
          <DatePicker />
        </Menu.Item>
        <Menu.Item>
          <Selection />
        </Menu.Item>
        <Menu.Item>
          <Selection />
        </Menu.Item>
<<<<<<< HEAD
        <Menu.Item></Menu.Item> */}
      </div>
=======
        <Menu.Item></Menu.Item>
      </Menu>
>>>>>>> 7dbc2b0ef543c252038cda4ecaf7f61d24196eba
    );
  }
}

export default NavBar;
