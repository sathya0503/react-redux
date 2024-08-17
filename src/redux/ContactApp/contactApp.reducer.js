import { FETCH_CONTACTS_FAILURE, FETCH_CONTACTS_REQUEST, FETCH_CONTACTS_SUCCESS, SELECT_CONTACT } from "./contactApp.actions";


export const contactsListFeatureKey = 'contactApp';

let initialState = {
    loading: false,
    users: [],
    selectedUser : {},
    errorMessage: ''
};

export const contactAppreducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case FETCH_CONTACTS_REQUEST:
            return {
                ...state,
                loading: true,
                users: [],
                errorMessage: ''

            }
        case FETCH_CONTACTS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: payload
            }
        case FETCH_CONTACTS_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            }
        case SELECT_CONTACT :
            return {
                ...state,
                selectedUser : payload
            }    
        default: return state;
    }
}