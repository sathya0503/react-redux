import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkCoding, checkEating, checkSleeping } from "../redux/HobbySelector/hobbySelector.actions";
import { hobbySelectorFeatureKey } from "../redux/HobbySelector/hobbySelector.reducer";

let HobbySelector = () => {

    let dispatch = useDispatch();

    let hobbySelector = useSelector((state) => {
        return state[hobbySelectorFeatureKey]
    })

    let {hobby} = hobbySelector;


    return (
        <React.Fragment>
             <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                            {/* <pre>{JSON.stringify(hobby)}</pre> */}
                                <p className="h4">Hobby Selector</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <form>
                                            <div className="form-check">
                                                <input name="eating" onChange={() => dispatch(checkEating())} className="form-check-input" type="checkbox" value={''} id='defaultCheck1'/>
                                                <label className="form-check-label" htmlFor="defaultCheck1">Eating</label>
                                            </div>
                                            <div className="form-check">
                                                <input name="coding" onChange={() => dispatch(checkCoding())} className="form-check-input" type="checkbox" value={''} id='defaultCheck2'/>
                                                <label className="form-check-label" htmlFor="defaultCheck2">Coding</label>
                                            </div>
                                            <div className="form-check">
                                                <input name="sleeping" onChange={() => dispatch(checkSleeping())} className="form-check-input" type="checkbox" value={''} id='defaultCheck3'/>
                                                <label className="form-check-label" htmlFor="defaultCheck3">Sleeping</label>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-9">
                                        {
                                            hobby.eating ? 
                                            <React.Fragment>
                                                <div className="card animated jello">
                                                    <div className="card-body bg-success text-white">
                                                        <p className="h3">Eating</p>
                                                    </div>
                                                </div>
                                            </React.Fragment> : null
                                        }
                                        {
                                            hobby.coding ? 
                                            <React.Fragment>
                                                <div className="card animated jello">
                                                    <div className="card-body bg-primary text-white">
                                                        <p className="h3">Coding</p>
                                                    </div>
                                                </div>
                                            </React.Fragment> : null
                                        }
                                        {
                                            hobby.sleeping ? 
                                            <React.Fragment>
                                                <div className="card animated jello">
                                                    <div className="card-body bg-warning text-white">
                                                        <p className="h3">Sleeping</p>
                                                    </div>
                                                </div>
                                            </React.Fragment> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </React.Fragment>
    );

};

export default HobbySelector;