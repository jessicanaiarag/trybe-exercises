import getCurrentISSLocation from '../services/IssAPI';

export const GET_ISS_LOCATION = 'GET_ISSLOCATION'
export const GET_ISS_LOCATION_SUCCESS = 'GET_ISS_LOCATION_SUCCESS'
export const GET_ISS_LOCATION_FAIL = 'GET_ISSLOCATION_FAIL'

const actionGetISSLocation = () => ({
  type: GET_ISS_LOCATION,
});

const actionGetISSLocationOnSuccess = (payload) => ({
  type: GET_ISS_LOCATION_SUCCESS,
  latitude: payload.latitude,
  longitude: payload.longitude
});

const actionGetISSLocationOnFail = () => ({
  type: GET_ISS_LOCATION_FAIL,
});

export const fetchISSLocationWhitThunk = () => (dispatch) => {
  return (dispatch) => {
    dispatch(actionGetISSLocation());

    return getCurrentISSLocation()
      .then(
        ({ iss_Position }) => dispatch(actionGetISSLocationOnSuccess(iss_Position)),
        (error) => dispatch(actionGetISSLocationOnFail())
      );
  };
}
