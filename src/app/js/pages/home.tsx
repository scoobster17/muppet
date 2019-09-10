import * as React from 'react';
import Map, { LatLng } from '../components/map';


interface CustomWindow extends Window {
  googleMapsApiKey: string;
}

export default class HomePage extends React.Component<{}, { userLocation?: LatLng }> {

  /**
   *
   * @param props
   * @param state
   */
  constructor(props: {}, state: { userLocation?: LatLng }) {
    super(props, state);
  }

  /**
   *
   */
  render() {
    return (
      <main>
        <h1>Your places</h1>
        <Map
          googleMapURL={ `https://maps.googleapis.com/maps/api/js?key=${ (window as CustomWindow).googleMapsApiKey }` }
          loadingElement={ <div className='map-loading-element'></div> }
          containerElement={ <div className='mapContainerElement'></div> }
          mapElement={ <div className='mapElement' style={ { height: '600px' } }></div> }
          zoom={ 14 }
          center={ this.state && this.state.userLocation }
        />
        {/*<form>*/ }
        {/*<select>*/ }
        {/*<option value="-1" selected="selected">Please select&hellip;</option>*/ }
        {/*<option value="all">Show all places</option>*/ }
        {/*<option value="people">Address Book: Friends &amp; Family</a></li>*/ }
        {/*<option value="jobs">Employment: Jobs and Interviews</a></li>*/ }
        {/*<option value="holidays">Holidays: Places visited</a></li>*/ }
        {/*<option value="new">Create new category&hellip;</option>*/ }
        {/*</select>*/ }
        {/*</form>*/ }
      </main>
    );
  }

  /**
   *
   */
  async componentDidMount(): Promise<void> {
    const position = await getUserLocation();
console.log(position);
    if (position) {
      const { coords: { latitude, longitude } } = position;
      this.setState({
        userLocation: { latitude, longitude },
      });
    }
  }
}

/**
 *
 */
async function getUserLocation(): Promise<Position | void> {
  if ('geolocation' in navigator) {
    // const resolve = ({ coords: { latitude, longitude } }: Position) => ({ latitude, longitude });
    // const reject = (error: any) => { throw Error(error); };
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(resolve);
    });
  }
}

// if (navigator.geolocation) {
//
//   // get the current position of app user
//   navigator.geolocation.getCurrentPosition(function (position) {
//
//     var pos = {
//       lat: position.coords.latitude,
//       lng: position.coords.longitude
//     };
//
//     // set a marker on the user's location
//     var marker2 = placeMarker(mapObj, pos, '#00CCBB', 'map-icon-postal-code');
//
//     // const iconBase = '/img/icons/';
//     // icon: `${iconBase} temp-map-marker.png`
//
//     // center the map on the user's location and zoom in closer
//     mapObj.setCenter(pos);
//     mapObj.setZoom(16);
//   });
// }
// };
//
// // create / place a marker on the map
// var placeMarker = function placeMarker(mapObj, position, fillColor, iconClass) {
//   return new Marker({
//     map: mapObj,
//     position: position,
//     icon: {
//       path: SQUARE_PIN,
//       fillColor: fillColor,
//       fillOpacity: 1,
//       strokeColor: '',
//       strokeWeight: 0
//     },
//     map_icon_label: '<span class="map-icon ' + iconClass + '"></span'
//   });
