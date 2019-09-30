import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import axios from "axios";
import EventPage from "./pages/EventPage/EventPage";
import EventCard from "./Component/EvenCard/EventCard";

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
        axios.spread((eventData, categoryData) => {
          const events = eventData.data.events;
          if (events && events.length > 0) {
            this.setState({ eventData: events });
          }
          const categories = categoryData.data.categories;
          if (categories && categories.length > 0) {
            this.setState({
              ...this.state,
              categoryData: categories
            });
          }
          console.log("categoryData:", this.state.categoryData);
          console.log("eventData:", this.state.eventData);
        })
      );
  }
  render() {
    const { eventData, categoryData } = this.state;

    const eventCards = eventData.map((event, index) => {
      const image = event.logo === null ? "/no_image.png" : event.logo.url;
      return (
        <EventCard
          key={index}
          cover={image}
          title={event.name.text}
          body={event.description.text}
          startTime={event.start.utc}
          summary={event.summary}
        />
      );
    });
    return (
      <div className="App">
        <EventPage eventCards={eventCards} />
      </div>
    );
  }
}

export default App;
