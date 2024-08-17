import { GOOD_AFTERNOON, GOOD_EVENING, GOOD_MORNING } from "./messageCard.actionTypes";

import * as messageActions from './messageCard.actionTypes';
//messageActions.GOOD_AFTERNOON like this we can call exprots from messageCard.actionTypes

export const messageFeaturekey = 'messageCard';

let initialState = {
    message: 'Hello'
}

let messageCardReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case GOOD_MORNING:
            return {
                message: 'Good Morning'
            }
        
        case messageActions.GOOD_AFTERNOON:
            return {
                message : 'Good Afternoon'
            }
        case GOOD_EVENING:
            return{
                message : 'Good Evening'
            }
        default : return state; 
    }
};

export {messageCardReducer};