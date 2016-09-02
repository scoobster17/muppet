;muppet = window.muppet || {};
muppet.map = (function(){

	// config
	var config = {};
	var elems = {};

	// private methods
	var bindElems = function() {
		elems.map = document.getElementById('map');
		elems.key = document.getElementById('key');
	};

	var bindEvents = function () {
    	//window.addEventListener('load', initMap, false);
    };

    var initMap = function () {
    	config.eventLatLng = new google.maps.LatLng(51.5719277,0.420906);
    	var mapOptions = {
    		center: config.eventLatLng,
    		zoom:17,
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

    var fetchApiKey = function() {
    	console.log('ajax call to return key from BE when introduced');
    	elems.key.setAttribute('value', key);
    	var mapJs = document.createElement('script');
    	mapJs.src = "https://maps.googleapis.com/maps/api/js";
    	mapJs.type = 'text/javascript';
    	document.getElementsByTagName('body')[0].appendChild(mapJs);
    };

	var init = function() {
		bindElems();
		//fetchApiKey();
		bindEvents();
	};

	// public methods
	return {
		init: init
	};

})();

muppet.map.init();
