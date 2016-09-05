function getLocation(mapPageComponent, map, maps) {

    // check for geolocation support
    if (navigator.geolocation) {

        // get the current position of app user
        navigator.geolocation.getCurrentPosition((position) => {

            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            mapPageComponent.props.setLocation(pos, map, maps);

            // set a marker on the user's location
            // const marker2 = placeMarker(mapObj, pos, '#00CCBB', 'map-icon-postal-code');

            // const iconBase = '/img/icons/';
            // icon: `${iconBase} temp-map-marker.png`

            // center the map on the user's location and zoom in closer
            //mapObj.setCenter(pos);
            //mapObj.setZoom(16);

        });
    }
}

export default getLocation;