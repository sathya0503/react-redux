import { CHECK_CODING, CHECK_EATING, CHECK_SLEEP, SELECT_HOBBY } from "./hobbySelector.actions";

//It is used to identify object state belongs to which component
export const hobbySelectorFeatureKey = 'hobbySelector';

let initialState = {
    hobby: {
        eating: false,
        coding: false,
        sleeping: false
    }
}

export const hobbySelectorReducer = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case CHECK_EATING:
            return {
                hobby: {
                    ...state.hobby,
                    eating: !state.hobby.eating
                }
            }
        case CHECK_CODING:
            return {
                hobby: {
                    ...state.hobby,
                    coding: !state.hobby.coding
                }
            }
        case CHECK_SLEEP:
            return {
                hobby: {
                    ...state.hobby,
                    sleeping: !state.hobby.sleeping
                }
            }
        default: return state;
    }
}