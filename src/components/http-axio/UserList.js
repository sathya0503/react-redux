import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAynsc, fetchUsers } from "../../redux/UserList/userlist.actions";
import { userListFeatureKey } from "../../redux/UserList/userlist.reducer";

let UserList = () => {

    let dispatch = useDispatch();

    let userInfo = useSelector((state) => {
        return state[userListFeatureKey]
    });

    let { loading, users, errorMessage } = userInfo;

    let clickGetusers = () => {
        dispatch(fetchUserAynsc());
    }


    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">user List</p>
                        <p className="lead">Some text hereeeeee</p>
                        <button onClick={clickGetusers} className="button1">Get List</button>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col" style={{marginLeft:'45%'}}>
                            {
                                loading &&
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
                            }
                        </div>
                    </div>
                </div>
                {
                    !loading && users.length > 0 ? <React.Fragment>
                        <div className="row mt-3">
                            <div className="col">
                                <table className="table table-hover text-center table-striped table-primary">
                                    <thead className="bg-dark text-white">
                                        <tr>
                                            <th>Referral ID</th>
                                            <th>Referral Name</th>
                                            <th>Refferral Email</th>
                                            <th>Referred By</th>
                                            <th>Mobile Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map(user => {
                                                return (
                                                    <tr key={user.refId}>
                                                        <td>{user.refId}</td>
                                                        <td>{user.refereeName}</td>
                                                        <td>{user.refereeMail}</td>
                                                        <td>{user.referredBy}</td>
                                                        <td>{user.mobileNumber}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </React.Fragment> : <React.Fragment>
                        {
                            errorMessage.hasOwnProperty('message') ? <React.Fragment>
                                <div className="container">
                                    <div className="row">
                                        <div className="col" style={{marginLeft:'40%'}}>
                                            <div className="card-no-data">
                                                <div className="header1">
                                                    <div className="image1"><svg aria-hidden="true" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none">
                                                        <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" stroke-linejoin="round" stroke-linecap="round"></path>
                                                    </svg></div>
                                                    <div className="content1">
                                                        <span className="title1">{errorMessage.message}</span>
                                                        <p class="message1">Unable to fetch user list..!! Please try after sometime</p>
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
                    </React.Fragment>

                }
                {/* <pre>{JSON.stringify(errorMessage)}</pre> */}

            </div>
        </React.Fragment>
    );

};

export default UserList;