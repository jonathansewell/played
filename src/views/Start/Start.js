import React, { Component } from "react";
import geodist from "geodist";
import playgrounds from "../../data";

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null
    };
  }

  calculateDistanceTo(to) {
    const { longitude, latitude } = this.state;
    const from = { lat: latitude, long: longitude };
    return geodist(from, to, {
      exact: true,
      unit: "km"
    });
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({ latitude, longitude });
      }
    );
  }

  renderPlayground({ name, distance }) {
    return (
      <a
        href={`https://www.google.com/maps/search/${encodeURI(name)}`}
        key={name}
      >
        <div>{`${name} (${distance.toFixed(1)} km)`}</div>
      </a>
    );
  }

  render() {
    const { geolocationAvailable } = this.props;
    const { longitude, latitude } = this.state;

    if (!geolocationAvailable) {
      return <div>Please enable geolocation</div>;
    }

    if (!longitude || !latitude) {
      return <div>Getting your location...</div>;
    }

    const playgroundsWithDistance = playgrounds.map(({ name, lat, lng }) => ({
      distance: this.calculateDistanceTo({ lat, long: lng }),
      name
    }));

    return playgroundsWithDistance
      .sort((a, b) => a.distance - b.distance)
      .map(this.renderPlayground);
  }
}

export default Start;
