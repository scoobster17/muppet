'use strict';

;window.muppet = window.muppet || {};
muppet.map = function () {

	// set default configuration and variables
	var elems = {};
	var config = {
		defaultCoords: {
			lat: 35,
			lng: -38
		}
	};

	/**************************************************************************/

	/* PRIVATE METHODS */

	/**
  * Bind DOM elements to the elems object
  */
	var bindElems = function bindElems() {
		elems.map = document.getElementById('map');
		elems.key = document.getElementById('key');
	};

	/**
  * Setup Map
  */
	var setupMap = function setupMap() {

		// if page JS not run yet, assign DOM elements
		if (Object.keys(elems).length < 1) bindElems();

		// define map options object for initialisation, based on default coords
		var mapOptions = {
			center: config.defaultCoords,
			zoom: 3,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		// create google maps object
		var mapObj = new google.maps.Map(elems.map, mapOptions);

		// check for geolocation support
		if (navigator.geolocation) {

			// get the current position of app user
			navigator.geolocation.getCurrentPosition(function (position) {

				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				// set a marker on the user's location
				var marker2 = placeMarker(mapObj, pos, '#00CCBB', 'map-icon-postal-code');

				// const iconBase = '/img/icons/';
				// icon: `${iconBase} temp-map-marker.png`

				// center the map on the user's location and zoom in closer
				mapObj.setCenter(pos);
				mapObj.setZoom(16);
			});
		}
	};

	// create / place a marker on the map
	var placeMarker = function placeMarker(mapObj, position, fillColor, iconClass) {
		return new Marker({
			map: mapObj,
			position: position,
			icon: {
				path: SQUARE_PIN,
				fillColor: fillColor,
				fillOpacity: 1,
				strokeColor: '',
				strokeWeight: 0
			},
			map_icon_label: '<span class="map-icon ' + iconClass + '"></span'
		});
	};

	// initialisation
	var init = function init() {
		bindElems();
	};

	/**************************************************************************/

	/* PUBLIC METHODS */

	return {
		init: init,
		setupMap: setupMap
	};
}();

// call the initialisation function
muppet.map.init();