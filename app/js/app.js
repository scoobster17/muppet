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

				// center the map on the user's location and zoom in closer
				mapObj.setCenter(pos);
				mapObj.setZoom(16);

				// set a marker on the user's location
				var marker = new google.maps.Marker({
					position: pos,
					map: mapObj,
					title: 'You'
				});

				// const iconBase = '/img/icons/';
				// icon: `${iconBase} temp-map-marker.png`
			});
		}
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