import Axios from 'axios';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

let fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,

    }
}

let fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

let fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

//real actions
export const fetchUsers = () => {
    return (dispatch) => {

        dispatch(fetchUserRequest());

        let dataUrl = 'http://localhost:8081/referralDetails'
        Axios.get(dataUrl).then((response) => {
            dispatch(fetchUserSuccess(response.data));
        }).catch((error) => {
            dispatch(fetchUserFailure(error));
        });
    }
}

//Simple way
export const fetchUserSimple = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_USER_REQUEST
        });

        let dataUrl = 'http://localhost:8081/referralDetails'
        Axios.get(dataUrl).then((response) => {
            dispatch({
                type: FETCH_USER_SUCCESS,
                payload: response.data
            });
        }).catch((error) => {
            dispatch({
                type: FETCH_USER_FAILURE,
                payload: error
            });
        });
    }
}

//JavaScript Async
export const fetchUserAynsc = () => {
    return async (dispatch) => {
        dispatch({
            type: FETCH_USER_REQUEST
        });

        try {
            let dataUrl = 'http://localhost:8081/referralDetails'
            let response = await Axios.get(dataUrl);
            dispatch({
                type: FETCH_USER_SUCCESS,
                payload: response.data
            });
        }
        catch (error){
            dispatch({
                type: FETCH_USER_FAILURE,
                payload: error
            });
        }
    }
}
