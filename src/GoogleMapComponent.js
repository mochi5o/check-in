import React, { useCallback, useRef, useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";

import mapStyles from "./mapUtils/mapStyles.json";
import locationData from "./mapUtils/locations.json"
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

  const locations = locationData

  return (
    <GoogleMap
      id="map"
      mapContainerStyle={mapContainerStyle}
      zoom={11}
      center={{
        lat: 34.046852,
        lng: 130.999749
      }}
      options={options}
      onLoad={onMapLoad}>
        {
          locations.map(item => {
            return (
            <Marker key={item.name} position={item.location} />
            )
          })
        }
    </GoogleMap>
  );
}
