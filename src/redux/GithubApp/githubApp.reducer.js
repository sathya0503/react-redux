import { FETCH_PROFILE_FAILURE, FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_REPOS_FAILURE, FETCH_REPOS_REQUEST, FETCH_REPOS_SUCCESS } from "./githubApp.actions";


export const githubAppFeatureKey = 'githubApp';

let initialState = {
    loading: false,
    githubProfile : {},
    githubRepos : [],
    errorMessage: {}
};

export const githubAppReducer = (state=initialState, actions) => {
    let {type, payload} = actions;
    switch(type){
        case FETCH_PROFILE_REQUEST:
            return{
                ...state,
                loading : true,
                githubProfile : {}
            }
        case FETCH_PROFILE_SUCCESS:
            return{
                ...state,
                loading : false,
                githubProfile : payload,
                errorMessage : {}
            }
        case FETCH_PROFILE_FAILURE:
            return{
                ...state,
                loading : false,
                errorMessage : payload
            }
        case FETCH_REPOS_REQUEST:
            return{
                ...state,
                loading : true,
                githubRepos : []
            }
        case FETCH_REPOS_SUCCESS:
            return{
                ...state,
                loading : false,
                githubRepos : payload,
                errorMessage : {}
            }
        case FETCH_REPOS_FAILURE:
            return{
                ...state,
                loading : false,
                errorMessage : payload
            }
        default : return state;
    }
}
