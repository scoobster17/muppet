;window.muppet = window.muppet || {};
muppet.map = (() => {

	// config
	const elems = {};
	const config = {
		defaultCoords: {
			lat:35,
			lng:-38
		}
	};

	/**************************************************************************/

	/* PRIVATE METHODS */

	// bind DOM elements to the elems object
	const bindElems = () => {
		elems.map = document.getElementById('map');
		elems.key = document.getElementById('key');
	};

    const setupMap = () => {

    	// if page JS not run yet, assign DOM elements
    	if (Object.keys(elems).length < 1) bindElems();

    	const mapOptions = {
    		center: config.defaultCoords,
    		zoom:3,
    		mapTypeId: google.maps.MapTypeId.ROADMAP
    	};

    	config.eventLatLng = new google.maps.LatLng(mapOptions.center.lat, mapOptions.center.lng);
    	const mapObj = new google.maps.Map(elems.map, mapOptions);

    	if (navigator.geolocation) {
    		navigator.geolocation.getCurrentPosition((position) => {
    			const pos = {
	            	lat: position.coords.latitude,
	            	lng: position.coords.longitude
	            };

	            mapObj.setCenter(pos);
	            mapObj.setZoom(16);

	            const marker = new google.maps.Marker({
					position: pos,
					map: mapObj,
					title: 'You'
				});

    			// const iconBase = '/img/icons/';
				// icon: `${iconBase} temp-map-marker.png`

    		});
    	}
    };

	const init = () => {
		bindElems();
	};

	return {
		init: init,
		setupMap: setupMap
	}

})();
muppet.map.init();