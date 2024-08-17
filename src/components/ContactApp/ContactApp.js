import React, { useState } from "react";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
import { useSelector } from "react-redux";
import { contactsListFeatureKey } from "../../redux/ContactApp/contactApp.reducer";

let ContactApp = () => {

    let userInfo = useSelector((state) => {
        return state[contactsListFeatureKey]
    });

    let {selectedUser} = userInfo;

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">Contact App</p>
                        <p className="lead">Some text here app contact app</p>
                    </div>
                </div>
                <div className="row mt-3">
                    {
                        Object.keys(selectedUser).length > 0 ?
                            <div className="col">
                                <ContactList />
                            </div> : 
                            <div className="col-md-9">
                                <ContactList />
                            </div>
                    }
                    <div className="col-md-3">
                        <ContactCard selectedUser={selectedUser} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ContactApp;