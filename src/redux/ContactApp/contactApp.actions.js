import Axios from 'axios';

export const FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';
export const SELECT_CONTACT = 'SELECT_CONTACT';



export const selectContact = (contact) => {
    return{
        type : SELECT_CONTACT,
        payload : contact
    }
}

//JavaScript Async
export const fetchContactsAynsc = () => {
    return async (dispatch) => {
        dispatch({
            type: FETCH_CONTACTS_REQUEST
        });

        try {
            let dataUrl = 'https://gist.githubusercontent.com/thenaveensaggam/77fd2f17e30dd74e29dc39156420be1a/raw/9f872818c85abd63999200ebc963907f9197f812/customers.21-10-2020.json'
            let response = await Axios.get(dataUrl);
            dispatch({
                type: FETCH_CONTACTS_SUCCESS,
                payload: response.data
            });
        }
        catch (error){
            dispatch({
                type: FETCH_CONTACTS_FAILURE,
                payload: error
            });
        }
    }
}
