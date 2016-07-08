;window.muppet = window.muppet || {};
muppet.map = (() => {

	// config
	let elems = {};
	let config = {};

	// private methods
	let bindElems = () => {
		elems.map = document.getElementById('map');
		elems.key = document.getElementById('key');
	};

	let fetchApiKey = () => {

    	console.log('ajax call to return key from BE when introduced replacing next line');
    	elems.key.setAttribute('value', key);

    	/*var mapJs = document.createElement('script');
    	mapJs.src = "https://maps.googleapis.com/maps/api/js";
    	mapJs.type = 'text/javascript';
    	document.getElementsByTagName('body')[0].appendChild(mapJs);*/

    	let http = function() {
    		return new Promise((resolve, reject) => {
	    		let url = "https://maps.googleapis.com/maps/api/js";
	    		let request = new XMLHttpRequest();
	    		request.open('GET', url, true);
	    		request.onload = () => {
	    			console.log('onload')
	    			if (request.status >= 200 && request.status <= 400) {
	    				console.log('res', request.response);
	    				resolve(request.response);
	    			}
	    		}
	    		request.send();
	    	});
	    };

	    http().then(function(d){
	    	console.log('here');
	    	console.log(d);
	    	//initMap();
	    });
    };

    let initMap = () => {
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

	let init = () => {
		bindElems();
		fetchApiKey();
	};

	return {
		init: init
	}

})();
muppet.map.init();