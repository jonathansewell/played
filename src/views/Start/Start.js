import React, { Component } from "react";
import geodist from "geodist";
import playgrounds from "../../data";
import styles from "./start.css";

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
    const distanceClass =
      distance <= 1
        ? styles.shortWalk
        : distance <= 2
          ? styles.mediumWalk
          : styles.farWalk;

    return (
      <a
        href={`https://www.google.com/maps/search/${encodeURI(name)}`}
        key={name}
        className={styles.playgroundLink}
      >
        <div className={styles.playground}>
          <span className={distanceClass + " " + styles.distance}>
            {distance.toFixed(1)} km
          </span>
          <span className={styles.name}>{name}</span>
        </div>
      </a>
    );
  }

  render() {
    const { geolocationAvailable } = this.props;
    const { longitude, latitude } = this.state;

    if (!geolocationAvailable) {
      return (
        <div className={styles.loadingNotice}>Please enable geolocation</div>
      );
    }

    if (!longitude || !latitude) {
      return (
        <div className={styles.loadingNotice}>Getting your location...</div>
      );
    }

    const playgroundsWithDistance = playgrounds.map(({ name, lat, lng }) => ({
      distance: this.calculateDistanceTo({ lat, long: lng }),
      name
    }));

    return (
      <div>
        <h1 className={styles.title}>Nearby Playgrounds</h1>
        {playgroundsWithDistance
          .sort((a, b) => a.distance - b.distance)
          .map(this.renderPlayground)}
      </div>
    );
  }
}

export default Start;
