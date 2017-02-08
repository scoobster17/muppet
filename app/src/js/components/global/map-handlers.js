import getLocation from './locator';

export function getIcons (mapPageComponent, map, maps) {

    const mapIconsRequest = new Promise((resolve, reject) => {
        /*var mapIconsScript = document.createElement('script');
        mapIconsScript.onload = function() {
            if (typeof MAP_PIN !== 'undefined') {
                resolve('Success getting map icons');
            } else {
                reject('Failed to get map icons');
            }
        }
        mapIconsScript.src = "/bower_components/map-icons/dist/js/map-icons.min.js";
        document.body.appendChild(mapIconsScript);*/
        resolve('forced success pending new icons');
    });
    mapIconsRequest.then(() => {
        getLocation(mapPageComponent, map, maps);
    })
}

export function getPlaces (mapPageComponent, map, maps) {

    const placesRequest = new Promise((resolve, reject) => {
        var placesJSON = document.createElement('script');
        mapIconsScript.onload = function() {
            if (typeof MAP_PIN !== 'undefined') {
                resolve('Success getting map icons');
            } else {
                reject('Failed to get map icons');
            }
        }
        mapIconsScript.src = "/bower_components/map-icons/dist/js/map-icons.min.js";
        document.body.appendChild(mapIconsScript);*/
        resolve('forced success pending new icons');
    });
    mapIconsRequest.then(() => {
        getLocation(mapPageComponent, map, maps);
    })
}

export function reCentreMap (pos, map, maps) {
    map.setCenter(pos);
    map.setZoom(17);
    const currentLocation = placeMarker(maps, map, pos, 'Your current location');
}

export function placeMarker(maps, map, position, title) {
    return new maps.Marker({
        map,
        position,
        title
    });
}