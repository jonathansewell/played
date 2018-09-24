import React from "react";
import ReactDOM from "react-dom";
import Start from "./views/Start";

const geolocationAvailable = "geolocation" in navigator;

ReactDOM.render(
  <Start geolocationAvailable={geolocationAvailable} />,
  document.getElementById("app")
);
