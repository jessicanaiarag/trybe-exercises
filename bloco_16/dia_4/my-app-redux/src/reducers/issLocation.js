import { GET_ISS_LOCATION, GET_ISS_LOCATION_SUCCESS, GET_ISS_LOCATION_FAIL } from '../actions';


const INITIAL_ISS_LOCATION_STATE = {
};

const issLocation = (state = INITIAL_ISS_LOCATION_STATE, action) => {
    switch (action.type) {
        case GET_ISS_LOCATION:
            return { ...state, isLoading: true };

        case GET_ISS_LOCATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                latitude: action.latitude,
                longitude: action.longitude
            };

        case GET_ISS_LOCATION_FAIL:
            return {
                ...state,
                isLoading: false,
                erro: 'Deu ruim'
            };
        default:
            return state;
    }
};

export default issLocation;
