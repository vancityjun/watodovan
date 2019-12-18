import React, { Component } from "react";
import { Layout, Row } from "antd";
import NavBar from "../../Component/NavBar/NavBar";
import Feature from "../../Component/Feature/Feature";

class EventPage extends Component {
  render() {
    const { eventCards } = this.props;
    return (
      <>
        <div className="">
          <NavBar />
          <div>
            <Feature />
            {eventCards}
          </div>
          <div>WaToDo Vancouver ©2019 Created by WTD Van</div>
        </div>
      </>
    );
  }
}

export default EventPage;
