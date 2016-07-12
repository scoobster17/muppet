'use strict';

;window.muppet = window.muppet || {};
muppet.map = function () {

	// config
	var elems = {};
	var config = {};

	/**************************************************************************/

	/* PRIVATE METHODS */

	// bind DOM elements to the elems object
	var bindElems = function bindElems() {
		elems.map = document.getElementById('map');
		elems.key = document.getElementById('key');
	};

	var setupMap = function setupMap() {

		if (Object.keys(elems).length < 1) bindElems();

		config.eventLatLng = new google.maps.LatLng(51.5719277, 0.420906);
		var mapOptions = {
			center: config.eventLatLng,
			zoom: 17,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var mapObj = new google.maps.Map(elems.map, mapOptions);
		var iconBase = '/img/icons/';
		var marker = new google.maps.Marker({
			position: config.eventLatLng,
			map: mapObj,
			icon: iconBase + ' temp-map-marker.png'
		});
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