import { SELECT_CODING, SELECT_EATING, SELECT_SLEEP } from "./hobbySelectorRadio.actions";


//It is used to identify object state belongs to which component
export const hobbySelectorRadioFeatureKey = 'hobbySelectorRadio';

let initialState = {
    hobby: null
}

export const hobbySelectorRadioReducer = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case SELECT_EATING:
            return {
                hobby: payload
            }
        case SELECT_CODING:
            return {
                hobby: payload
            }
        case SELECT_SLEEP:
            return {
                hobby: payload
            }
        default: return state;
    }
}