import geodist from "geodist";
import playgrounds from "./data";

function renderPlayground({ name, distance }) {
  let element = document.createElement("div");
  element.innerHTML = `${name} (${distance.toFixed(1)} km)`;
  document.body.appendChild(element);
}

const geolocationAvailable = "geolocation" in navigator;
if (!geolocationAvailable) {
  console.log("Geolocation is NOT available");
}

console.log("Calculating position");

navigator.geolocation.getCurrentPosition(function({
  coords: { latitude, longitude }
}) {
  const you = { lat: latitude, long: longitude };

  const playgroundsWithDistance = playgrounds.map(({ name, lat, lng }) => ({
    distance: geodist({ lat, long: lng }, you, {
      exact: true,
      unit: "km"
    }),
    name
  }));

  playgroundsWithDistance
    .sort((a, b) => a.distance - b.distance)
    .forEach(renderPlayground);
});
