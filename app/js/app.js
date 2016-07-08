'use strict';

;window.muppet = window.muppet || {};
muppet.map = function () {

	// config
	var elems = {};
	var config = {};

	// private methods
	var bindElems = function bindElems() {
		elems.map = document.getElementById('map');
		elems.key = document.getElementById('key');
	};

	var fetchApiKey = function fetchApiKey() {

		console.log('ajax call to return key from BE when introduced replacing next line');
		elems.key.setAttribute('value', key);

		/*var mapJs = document.createElement('script');
  mapJs.src = "https://maps.googleapis.com/maps/api/js";
  mapJs.type = 'text/javascript';
  document.getElementsByTagName('body')[0].appendChild(mapJs);*/

		var http = function http() {
			return new Promise(function (resolve, reject) {
				console.log('please resolve');
				var url = "https://maps.googleapis.com/maps/api/js";
				var request = new XMLHttpRequest();
				request.open('GET', url, true);
				request.onload = function () {
					console.log('onload');
					if (request.status >= 200 && request.status <= 400) {
						console.log('res', request.response);
						resolve(request.response);
					}
				};
				request.send();
			});
		};

		http().then(function (d) {
			console.log('here');
			console.log(d);
			//initMap();
		});
	};

	var initMap = function initMap() {
		config.eventLatLng = new google.maps.LatLng(51.5719277, 0.420906);
		var mapOptions = {
			center: config.eventLatLng,
			zoom: 17,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(elems.map, mapOptions);
		var iconBase = '/img/icons/';
		var marker = new google.maps.Marker({
			position: config.eventLatLng,
			map: map,
			icon: iconBase + 'temp-map-marker.png'
		});
	};

	var init = function init() {
		bindElems();
		fetchApiKey();
	};

	return {
		init: init
	};
}();
muppet.map.init();