import React from "react";
import { useSelector } from "react-redux";
import { contactsListFeatureKey } from "../../redux/ContactApp/contactApp.reducer";

let ContactCard = () => {

    let userInfo = useSelector((state) => {
        return state[contactsListFeatureKey]
    });

    let {selectedUser} = userInfo;

    return (
        <React.Fragment>
            {
                Object.keys(selectedUser).length > 0 ?
                    <React.Fragment>
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <div className="p-4">

                                </div>
                            </div>
                            <div className="card-body text-center">
                                <img src={selectedUser.picture.large} alt="" className="img-thumbnail rounded-circle w-50 contact-img"/>
                                <ul className="list-group mt-3">
                                    <li className="list-group-item list-group-item-secondary">
                                        <b>NAME :</b> {selectedUser.name.first} {selectedUser.name.last}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        {selectedUser.email}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        AGE : {selectedUser.dob.age} Yrs
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        City : {selectedUser.location.city}
                                    </li>
                                    <li className="list-group-item list-group-item-primary">
                                        State : {selectedUser.location.state}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </React.Fragment> : null
            }
        </React.Fragment>
    );
};

export default ContactCard;