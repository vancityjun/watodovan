import React, { Component } from "react";
import { Col, Card, Tag } from "antd";
import Countdown from "react-countdown-now";
import EventDrawer from "../EventDrawer/EventDrawer";

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false
    };
  }

  booleanHandler = () => {
    if (this.state.isDrawerOpen)
      this.setState({
        isDrawerOpen: false
      });
  };

  drawerHandler = () => {
    this.setState({ isDrawerOpen: true });
  };

  render() {
    const { title, summary, cover, startTime, body } = this.props;
    const coverImage = (
      <img alt="title" src={cover} onClick={() => this.drawerHandler()} />
    );
    return (
      <div className="eventRow">
        <Card
          className="eventCard"
          hoverable
          // cover={coverImage}
          cover={<img alt={title} src={cover} />}
          onClick={() => this.drawerHandler()}
        >
          <Countdown
            date={new Date(startTime)}
            renderer={({ days, hours, minutes, seconds }) => (
              <Tag color="geekblue">
                <span className="countdown">
                  {days} days {hours} hours {minutes} mins {seconds} secs left
                </span>
              </Tag>
            )}
          />
          <Card.Meta title={title} description={summary} />
          {this.state.isDrawerOpen ? (
            <EventDrawer
              booleanHandler={this.booleanHandler}
              title={title}
              cover={cover}
              startTime={startTime}
              body={body}
            />
          ) : null}
        </Card>
      </div>
    );
  }
}

export default EventCard;
