;window.muppet = window.muppet || {};
muppet.map = (() => {

	// config
	const elems = {};
	const config = {};

	/**************************************************************************/

	/* PRIVATE METHODS */

	// bind DOM elements to the elems object
	const bindElems = () => {
		elems.map = document.getElementById('map');
		elems.key = document.getElementById('key');
	};

    const setupMap = () => {

    	if (Object.keys(elems).length < 1) bindElems();

    	config.eventLatLng = new google.maps.LatLng(51.5719277,0.420906);
    	const mapOptions = {
    		center: config.eventLatLng,
    		zoom:17,
    		mapTypeId: google.maps.MapTypeId.ROADMAP
    	};
    	const mapObj = new google.maps.Map(elems.map, mapOptions);
    	const iconBase = '/img/icons/';
		const marker = new google.maps.Marker({
		  position: config.eventLatLng,
		  map: mapObj,
		  icon: `${iconBase} temp-map-marker.png`
		});
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