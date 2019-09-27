import React from "react";
import "./App.css";
import axios from "axios";
import EventPage from "./pages/EventPage/EventPage";
import "antd/dist/antd.css";

class App extends React.Component {
  state = {
    eventData: [],
    categoryData: []
  };
  componentDidMount() {
    axios
      .all([
        axios.get(
          "https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=Vancouver%2C+Canada&location.within=40km&token=KCQPMHOXUOJBGVFFKKUV"
        ),
        axios.get(
          "https://www.eventbriteapi.com/v3/categories/?token=KCQPMHOXUOJBGVFFKKUV"
        )
      ])
      .then(
        axios.spread((data, categoryData) => {
          const { events } = data;
          if (events && events.length > 0) {
            this.setState({ eventData: events });
          }
          const { categories } = categoryData;
          if (categories && categories.length > 0) {
            this.setState({ categoryData: categories });
          }
          console.log("categoryData:", categoryData);
          console.log("data:", data);
        })
      );
  }

  render() {
    return (
      <div className="App">
        <EventPage />
      </div>
    );
  }
}

export default App;
