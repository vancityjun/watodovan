import React, { Component } from "react";
import { Layout, Row } from "antd";
import NavBar from "../../Component/NavBar/NavBar";
import Feature from "../../Component/Feature/Feature";

class EventPage extends Component {
  render() {
    const { eventCards } = this.props;
    return (
      <>
<<<<<<< HEAD
        <div className="">
          <NavBar />
          <div>
            <Feature />
            {eventCards}
          </div>
          <div>WaToDo Vancouver ©2019 Created by WTD Van</div>
        </div>
=======
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
>>>>>>> 7dbc2b0ef543c252038cda4ecaf7f61d24196eba
      </>
    );
  }
}

export default EventPage;
