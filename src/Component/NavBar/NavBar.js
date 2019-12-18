import React, { Component } from "react";
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
          <DatePicker />
        </Menu.Item>
        <Menu.Item>
          <Selection />
        </Menu.Item>
        <Menu.Item>
          <Selection />
        </Menu.Item>
        <Menu.Item></Menu.Item> */}
      </div>
    );
  }
}

export default NavBar;
