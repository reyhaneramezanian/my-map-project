import L from "leaflet";

export const coloredMarker = (color = "#d32f2f") =>
  L.divIcon({
    className: "",
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -40],
    html: `
      <svg
        width="30"
        height="42"
        viewBox="0 0 24 34"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0C5.4 0 0 5.4 0 12c0 8.4 12 22 12 22s12-13.6 12-22C24 5.4 18.6 0 12 0z"
          fill="${color}"
        />
        <circle cx="12" cy="12" r="5" fill="white" />
      </svg>
    `,
  });
