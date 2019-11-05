import React, { Component } from "react";
import { Layout, Row } from "antd";
import NavBar from "../../Component/NavBar/NavBar";
import Feature from "../../Component/Feature/Feature";

class EventPage extends Component {
  render() {
    const { eventCards } = this.props;
    return (
      <>
        <Layout className="">
          <NavBar />
          <Layout.Content>
            <Feature />
            {eventCards}
          </Layout.Content>
          <Layout.Footer>
            WaToDo Vancouver ©2019 Created by WTD Van
          </Layout.Footer>
        </Layout>
      </>
    );
  }
}

export default EventPage;
