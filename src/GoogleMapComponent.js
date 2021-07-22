import React, { useCallback, useRef } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import mapStyles from "./mapUtils/mapStyles.json";
// import PlaceInfo from "./mapUtils/PlaceInfo";

const libraries = ["places"];
const mapContainerStyle = {
  height: "60vh",
  width: "100%",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
export default function GoogleMapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_googleMapsApiKey,
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={{
          lat: 34.10,
          lng: 131.28,
        }}
        options={options}
        onLoad={onMapLoad}
      >
      </GoogleMap>
  );
}