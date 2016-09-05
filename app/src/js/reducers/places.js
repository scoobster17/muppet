// App dependencies
import getLocation from '../components/global/locator';
import * as mapHandlers from '../components/global/map-handlers';

function places(state = {}, action) {
    switch (action.type) {
        case 'REQUEST_ICONS':
            mapHandlers.getIcons(action.mapPageComponent, action.map, action.maps);
            return state;
            break;

        case 'GET_LOCATION':
            getLocation(action.mapPageComponent, action.map, action.maps);
            return state;
            break;

        case 'SET_LOCATION':
            mapHandlers.reCentreMap(action.userLocation, action.map, action.maps);
            return {
                ...state,
                userLocation: action.userLocation
            }
            break;

        default:
            return state;
    }
}

export default places;