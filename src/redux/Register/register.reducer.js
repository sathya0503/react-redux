import { REGISTER_USER } from "./register.actions";


export const registerFeaturekey = 'register';


let initialState = {
    user : {
        username : '',
        email : '',
        password : '',
        designation : '',
        terms : false
    }
}

export const registerReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case REGISTER_USER:
            return {
                user : {
                    ...payload
                }
            }
        default : return state; 
    }
};
