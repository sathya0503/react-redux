import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsListFeatureKey } from "../../redux/ContactApp/contactApp.reducer";
import { fetchContactsAynsc, selectContact } from "../../redux/ContactApp/contactApp.actions";

let ContactList = (props) => {

    let dispatch = useDispatch();

    let userInfo = useSelector((state) => {
        return state[contactsListFeatureKey]
    });

    let { loading, users, errorMessage } = userInfo;

    useEffect(() => {
        dispatch(fetchContactsAynsc());
    }, []);

    let clickContact = (user) => {
        dispatch(selectContact(user))
    };


    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row mt-3">
                    <div className="col">
                        <table className="table table-hover text-center table-striped table-primary">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>S No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length > 0 ?
                                    <React.Fragment>
                                        {
                                            users.map(user => {
                                                return(
                                                    <tr key={user.login.uuid.substr(user.login.uuid.length - 4)} onClick={clickContact.bind(this, user)}>
                                                        <td>{user.login.uuid.substr(user.login.uuid.length - 4)}</td>
                                                        <td>{user.name.first} {user.name.last}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.phone}</td>
                                                        <td>{user.location.city}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </React.Fragment> : null
                                } 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

};

export default ContactList;