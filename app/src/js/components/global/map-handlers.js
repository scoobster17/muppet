export function reCentreMap (pos, map, maps) {
    console.log(pos, map, maps);
    map.setCenter(pos);
    map.setZoom(17);
}