import React from "react";
import { Drawer, Button } from "antd";
import $ from "jquery";

class EventDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }
  onClose = () => {
    document.querySelector("#root").style.width = "100%";
    this.setState({
      visible: false
    });
  };
  componentDidMount() {
    $("#root").css("width", "60%");
  }
  render() {
    const { title, cover, startTime, body } = this.props;

    const coverImage = (
      <img
        alt="title"
        src={cover}
        style={{ width: "100%", objectFit: "cover" }}
      />
    );
    return (
      <Drawer
        title={title}
        width={"100%"}
        onClose={() => {
          this.onClose();
          this.props.booleanHandler();
        }}
        visible={this.state.visible}
        maskClosable={true}
      >
        <div>{coverImage}</div>
        <div
          style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "5px 0" }}
        >
          {title}
        </div>
        {/* <div style={{ margin: "5px 0"}}>
          When :<Moment format="YYYY-MM-DD HH:mm">{startTime}</Moment>
        </div> */}
        <div>{body}</div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            borderTop: "1px solid #e8e8e8",
            padding: "10px 16px",
            textAlign: "right",
            left: 0,
            background: "#fff",
            borderRadius: "0 0 4px 4px"
          }}
        >
          <Button
            style={{
              marginRight: 8
            }}
            onClick={() => {
              this.onClose();
              this.props.booleanHandler();
            }}
          >
            Cancel
          </Button>
        </div>
      </Drawer>
    );
  }
}

export default EventDrawer;
