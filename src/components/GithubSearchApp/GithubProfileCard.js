import React from "react";
import { useSelector } from "react-redux";
import { githubAppFeatureKey } from "../../redux/GithubApp/githubApp.reducer";

let GithubProfileCard = () => {

    let githubAppInfo = useSelector((state) => {
        return state[githubAppFeatureKey]
    });

    let {githubProfile} = githubAppInfo;

    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify(props.githubProfile)}</pre> */}
            <div className="card">
                <img src={githubProfile.avatar_url} alt="" className="img-fluid"/>
                <div className="card-body">
                    <p className="h4">{githubProfile.login}</p>
                    <small>{githubProfile.bio}</small>
                    <a href={githubProfile.html_url} target="_blank"><button className="btn btn-success btn-sm">Profile</button></a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GithubProfileCard;