export function requestIcons(mapPageComponent, map, maps) {
    return {
        type: 'REQUEST_ICONS',
        mapPageComponent,
        map,
        maps
    }
}

export function getLocation(mapPageComponent, map, maps) {
    return {
        type: 'GET_LOCATION',
        mapPageComponent,
        map,
        maps
    }
}

export function setLocation(pos, map, maps) {
    return {
        type: 'SET_LOCATION',
        userLocation: pos,
        map,
        maps
    }
}