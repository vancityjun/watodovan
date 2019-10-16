import React, { Component } from "react";
import { Menu, Input, DatePicker } from "antd";
import Selection from "../Selection/Selection";
class NavBar extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item>
          <img
            class="logo"
            src={require("../../asset/watodo-logo.svg")}
            alt="watodo logo"
          />
        </Menu.Item>
        <Menu.Item>
          <Input.Search placeholder="Search Event" />
        </Menu.Item>
        <Menu.Item>
          <DatePicker />
        </Menu.Item>
        <Menu.Item>
          <Selection />
        </Menu.Item>
        <Menu.Item>
          <Selection />
        </Menu.Item>
        <Menu.Item></Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
