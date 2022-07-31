import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function GoogleMaps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyABmWoGVOASGdeM3r4cTGykjEcIUZkldr0',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 9.889107949177056, lng: 78.05177737145365 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}