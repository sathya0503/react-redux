import React, { useState } from "react";
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";
import { useDispatch, useSelector } from "react-redux";
import { githubAppFeatureKey } from "../../redux/GithubApp/githubApp.reducer";
import { fetchGithubProfileAynsc, fetchGithubReposAynsc, getUsername } from "../../redux/GithubApp/githubApp.actions";
let GithubSearchApp = () => {

    let dispatch = useDispatch();

    let [githubUsername, setGithubuser] = useState('');

    let githubAppInfo = useSelector((state) => {
        return state[githubAppFeatureKey]
    });


    let { loading, githubProfile, githubRepos, errorMessage } = githubAppInfo;

    let submitSearch = (event) => {
        event.preventDefault();
        dispatch(fetchGithubProfileAynsc(githubUsername))
        dispatch(fetchGithubReposAynsc(githubUsername))
    };

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(githubUser)}</pre> */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-secondary">Github Profile Search</p>
                        <p className="lead">Here you can search with github account and you can find github userdetails and repos as well</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form className="form-inline" onSubmit={submitSearch}>
                            <div className="form-group">
                                <input
                                    value={githubUsername}
                                    onChange={e => setGithubuser(e.target.value)}
                                    type="text" className="form-control" placeholder="Github Username" />
                            </div>
                            <input type="submit" className="button1" value="Search" />
                        </form>
                    </div>
                </div>
                {/* Loader */}
                {
                    loading ?
                        <React.Fragment>
                            <div className="container mt-5">
                                <div className="row">
                                    <div className="col" style={{ marginLeft: '45%' }}>
                                        <div>
                                            <div class="spinner">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment> : null
                }
                {
                    !loading && errorMessage.hasOwnProperty('message') ? <React.Fragment>
                    <div className="container">
                        <div className="row">
                            <div className="col" style={{marginLeft:'40%'}}>
                                <div className="card-no-data">
                                    <div className="header1">
                                        <div className="image1"><svg aria-hidden="true" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" stroke-linejoin="round" stroke-linecap="round"></path>
                                        </svg></div>
                                        <div className="content1">
                                            <span className="title1">{errorMessage.status === '404' ? 'User Not Found' : 'Unknown Error'}</span>
                                            <p class="message1">Unable to fetch user details..!! Please check github username</p>
                                        </div>
                                        <div class="actions1">
                                            <button class="desactivate" type="button">Try again</button>
                                            <button class="cancel" type="button">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment> : null
                }
                {/* Github Profile */}
                <div className="row">
                    <div className="col">
                        {/* <pre>{JSON.stringify(githubProfile)}</pre> */}
                        {
                            Object.keys(githubProfile).length > 0 ?
                                <React.Fragment>
                                    <GithubProfile />
                                </React.Fragment> : null
                        }
                    </div>
                </div>
                {/* Github Repo */}
                <div className="row">
                    <div className="col">
                        {/* <pre>{JSON.stringify(githubRepos)}</pre> */}
                        {
                            Object.keys(githubRepos).length > 0 ?
                                <React.Fragment>
                                    <GithubRepos />
                                </React.Fragment> : null
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GithubSearchApp;