import React from "react";
import { useSelector } from "react-redux";
import { githubAppFeatureKey } from "../../redux/GithubApp/githubApp.reducer";

let GithubProfileDetails = () => {

    let githubAppInfo = useSelector((state) => {
        return state[githubAppFeatureKey]
    });

    let {githubProfile, githubRepos} = githubAppInfo;

    return(
        <React.Fragment>
            <div className="card">
                <div className="card-header">
                    <span className="badge badge-success mx-2">{githubProfile.followers} Followers</span>
                    <span className="badge badge-warning mx-2">{githubProfile.public_repos} Repos</span>
                    <span className="badge badge-success mx-2">{githubProfile.public_gists} Gists</span>
                    <span className="badge badge-success mx-2">{githubProfile.following} Following</span>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            NAME : <span className="font-weight-bold">{githubProfile.name}</span>
                        </li>
                        <li className="list-group-item">
                            Location : <span>{githubProfile.location}</span>
                        </li>
                        <li className="list-group-item">
                            Email : <span>{githubProfile.email}</span>
                        </li>
                        <li className="list-group-item">
                            Blog : <span>
                                <a href={githubProfile.company} target="_blank"></a>
                                </span>
                        </li>
                        <li className="list-group-item">
                            Member since : <span>{githubProfile.created_at}</span>
                        </li>
                        <li className="list-group-item">
                            Profile URL : <span>
                                <a href={githubProfile} target="_blank"></a>
                                </span>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GithubProfileDetails;