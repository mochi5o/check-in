import React, { useCallback, useRef, useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import ListComponent from "./ListComponent";
import Button from '@material-ui/core/Button';
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
  const [selected, setSelected] = useState(null);
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  const locations = locationData

  return (
    <>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={{
          lat: 33.966808,
          lng: 130.950513
        }}
        options={options}
        onLoad={onMapLoad}>
        {
          locations.map(item => {
            return(
              <Marker
                key={item.name}
                position={item.location}
                onMouseOver={() => {
                  setSelected(item);
                }}
                icon={{
                  url: item.url,
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
              />
            )
          })
        }
        {
          selected ? (
            // MarkerにマウスオーバーされたときにInfoWindowが表示されます。
            <InfoWindow
              position={{
                lat: selected.location.lat,
                lng: selected.location.lng,
              }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>{selected.info}</div>
            </InfoWindow>
          ) : null
        }
      </GoogleMap>
      <Button variant="contained" color="default" size="large" href="check-in">
        チェックインする
      </Button>
      <ListComponent />
    </>
  );
}
