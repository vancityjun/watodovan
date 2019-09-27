import React, { Component } from "react";
import { Layout, Row } from "antd";
import NavBar from "../../Component/NavBar/NavBar";
class EventPage extends Component {
  render() {
    return (
      <>
        <Layout className="">
          <NavBar />
          <Layout.Content>
            {/* featured */}
            {/* <Row>{eventCards}</Row> */}
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
