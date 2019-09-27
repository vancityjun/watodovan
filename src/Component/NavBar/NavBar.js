import React, { Component } from "react";
import { Menu, Input } from "antd";

class NavBar extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item>
          <img src={require("../../asset/watodo-logo.svg")} alt="watodo logo" />
        </Menu.Item>
        <Menu.Item>
          <Input.Search placeholder="Search Event" />
        </Menu.Item>
        <Menu.Item></Menu.Item>
        <Menu.Item></Menu.Item>
        <Menu.Item></Menu.Item>
        <Menu.Item></Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
