import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userlist.actions";


export const userListFeatureKey = 'userList';

let initialState = {
    loading: false,
    users: [],
    errorMessage: ''
};

export const userListreducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
                users: [],
                errorMessage: ''

            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: payload
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            }
        default: return state;
    }
}

