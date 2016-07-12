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
	            /*
	            const marker = new google.maps.Marker({
					position: pos,
					map: mapObj,
					title: 'You'
				});
				*/

				const marker2 = new Marker({
				    map: mapObj,
				    position: pos,
				    icon: {
				        path: SQUARE_PIN,
				        fillColor: '#00CCBB',
				        fillOpacity: 1,
				        strokeColor: '',
				        strokeWeight: 0
				    },
				    map_icon_label: '<span class="map-icon map-icon-postal-code"></span>'
				});

    			// const iconBase = '/img/icons/';
				// icon: `${iconBase} temp-map-marker.png`

	            // center the map on the user's location and zoom in closer
	            mapObj.setCenter(pos);
	            mapObj.setZoom(16);

    		});
    	}
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