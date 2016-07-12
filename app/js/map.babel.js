;window.muppet = window.muppet || {};
muppet.map = (() => {

	// set default configuration and variables
	const elems = {};
	const config = {
		defaultCoords: {
			lat:35,
			lng:-38
		}
	};

	/**************************************************************************/

	/* PRIVATE METHODS */

	/**
	 * Bind DOM elements to the elems object
	 */
	const bindElems = () => {
		elems.map = document.getElementById('map');
		elems.key = document.getElementById('key');
	};

	/**
	 * Setup Map
	 */
    const setupMap = () => {

    	// if page JS not run yet, assign DOM elements
    	if (Object.keys(elems).length < 1) bindElems();

    	// define map options object for initialisation, based on default coords
    	const mapOptions = {
    		center: config.defaultCoords,
    		zoom:3,
    		mapTypeId: google.maps.MapTypeId.ROADMAP
    	};

    	// create google maps object
    	const mapObj = new google.maps.Map(elems.map, mapOptions);

    	// check for geolocation support
    	if (navigator.geolocation) {

    		// get the current position of app user
    		navigator.geolocation.getCurrentPosition((position) => {

    			const pos = {
	            	lat: position.coords.latitude,
	            	lng: position.coords.longitude
	            };

	            // set a marker on the user's location
				const marker2 = placeMarker(mapObj, pos, '#00CCBB', 'map-icon-postal-code');

    			// const iconBase = '/img/icons/';
				// icon: `${iconBase} temp-map-marker.png`

	            // center the map on the user's location and zoom in closer
	            mapObj.setCenter(pos);
	            mapObj.setZoom(16);

    		});
    	}
    };

    // create / place a marker on the map
    const placeMarker = (mapObj, position, fillColor, iconClass) => {
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
		    map_icon_label: `<span class="map-icon ${iconClass}"></span`
		});
    };

    // initialisation
	const init = () => {
		bindElems();
	};

	/**************************************************************************/

	/* PUBLIC METHODS */

	return {
		init: init,
		setupMap: setupMap
	}

})();

// call the initialisation function
muppet.map.init();