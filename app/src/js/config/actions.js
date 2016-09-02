export function getLocation(mapPageComponent, map, maps) {
    return {
        type: 'GET_LOCATION',
        mapPageComponent,
        map,
        maps
    }
}

export function setLocation(pos) {
    return {
        type: 'SET_LOCATION',
        userLocation: pos
    }
}