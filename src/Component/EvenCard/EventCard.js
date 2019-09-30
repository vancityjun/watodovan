import React, { Component } from "react";
import { Col, Card, Tag } from "antd";
import Countdown from "react-countdown-now";

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, summary, cover, startTime, body } = this.props;
    return (
      <Col span={6}>
        <Card hoverable cover={<img alt={title} src={cover} />}>
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
        </Card>
      </Col>
    );
  }
}

export default EventCard;
