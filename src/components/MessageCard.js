import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageFeaturekey } from "../redux/messageCard/messageCard.reducer";
import { sayGoodAfternoon, sayGoodEvening, sayGoodMorning } from "../redux/messageCard/messageCard.actions";

let MessageCard = () => {

    let dispatch = useDispatch();

    let messageInfo = useSelector((state) => {
        return state[messageFeaturekey];
    });

    let {message} = messageInfo;

    //1stway
    let clickGoodMorning = () => {
        dispatch(sayGoodMorning());
    }

    
    let clickGoodAfternoon = () => {
        dispatch(sayGoodAfternoon);
    }

    let clickGoodEvening = () => {
        dispatch(sayGoodEvening);
    }


    return (
        <React.Fragment>
             <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Message Card</p>
                            </div>
                            <div className="card-body">
                                <p className="h2">{message}</p>                                
                                <button onClick={clickGoodMorning} className="btn btn-success btn-sm">Good Morning</button>
                                {/* If function was less we can direct wirte inside like below... */}
                                {/* //=> 2nd way we can directly can dispatch method inside event */}
                                <button onClick={() => dispatch(sayGoodAfternoon())} className="btn btn-primary btn-sm">Good Afternoon</button>
                                <button onClick={() => dispatch(sayGoodEvening())} className="btn btn-secondary btn-sm">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </React.Fragment>
    );
};

export default MessageCard;