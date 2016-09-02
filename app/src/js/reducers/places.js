import getLocation from '../components/global/locator';

function places(state = {}, action) {
    switch (action.type) {
        case 'GET_LOCATION':
            getLocation(action.mapPageComponent, action.map, action.maps);
            return state;
            break;

        case 'SET_LOCATION':
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