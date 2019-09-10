import * as React from 'react';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap, Marker,
} from 'react-google-maps';


interface MapMarker {
  position: LatLng;
}

interface MapProps {
  center?: LatLng;
  zoom: number;
  markers?: MapMarker[];
}

export interface LatLng {
  latitude: number;
  longitude: number;
}

interface LatLngShort {
  lat: number;
  lng: number;
}

/**
 *
 * @constructor
 */
function Map(props: MapProps): JSX.Element {
  const london: LatLngShort = { lat: 51.5037327, lng: -0.1190995 };

  return(
    <GoogleMap
      zoom={ props.zoom }
      center={ props.center ? { lat: props.center.latitude, lng: props.center.longitude } : london }
    >
      {
        props.markers &&
        props.markers.map(({ position: { latitude: lat, longitude: lng } }) => <Marker position={{ lat, lng }} />)
      }
    </GoogleMap>
  );
}

/**
 *
 */
export default withScriptjs(withGoogleMap(Map));
