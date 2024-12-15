import Axios from 'axios';
import { CLIENT_ID, CLIENT_SECRET } from '../../components/GithubSearchApp/GithubCredentails';

export const FETCH_PROFILE_REQUEST = 'FETCH_PROFILE_REQUEST';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';

export const FETCH_REPOS_REQUEST = 'FETCH_REPOS_REQUEST';
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_FAILURE = 'FETCH_REPOS_FAILURE';



//JavaScript Async => for github profile
export const fetchGithubProfileAynsc = (username) => {
    return async (dispatch) => {
        dispatch({
            type: FETCH_PROFILE_REQUEST
        });

        try {
            let dataUrl = `https://api.github.com/users/${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
            let response = await Axios.get(dataUrl);
            dispatch({
                type: FETCH_PROFILE_SUCCESS,
                payload: response.data
            });
        }
        catch (error){
            dispatch({
                type: FETCH_PROFILE_FAILURE,
                payload: error
            });
        }
    }
}

//JavaScript Async => for github repos
export const fetchGithubReposAynsc = (username) => {
    return async (dispatch) => {
        dispatch({
            type: FETCH_REPOS_REQUEST
        });

        try {
            let dataUrl = `https://api.github.com/users/${username}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
            let response = await Axios.get(dataUrl);
            dispatch({
                type: FETCH_REPOS_SUCCESS,
                payload: [response.data]
            });
        }
        catch (error){
            dispatch({
                type: FETCH_REPOS_FAILURE,
                payload: error
            });
        }
    }
}