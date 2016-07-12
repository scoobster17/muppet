'use strict';

;window.muppet = window.muppet || {};
muppet.map = function () {

	// config
	var elems = {};
	var config = {
		defaultCoords: {
			lat: 35,
			lng: -38
		}
	};

	/**************************************************************************/

	/* PRIVATE METHODS */

	// bind DOM elements to the elems object
	var bindElems = function bindElems() {
		elems.map = document.getElementById('map');
		elems.key = document.getElementById('key');
	};

	var setupMap = function setupMap() {

		// if page JS not run yet, assign DOM elements
		if (Object.keys(elems).length < 1) bindElems();

		var mapOptions = {
			center: config.defaultCoords,
			zoom: 3,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		config.eventLatLng = new google.maps.LatLng(mapOptions.center.lat, mapOptions.center.lng);
		var mapObj = new google.maps.Map(elems.map, mapOptions);

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				mapObj.setCenter(pos);
				mapObj.setZoom(16);

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

	var init = function init() {
		bindElems();
	};

	return {
		init: init,
		setupMap: setupMap
	};
}();
muppet.map.init();