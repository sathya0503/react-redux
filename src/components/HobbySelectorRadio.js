import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hobbySelectorRadioFeatureKey } from "../redux/HobbySelectorRadio/hobbySelectorRadio.reducer";
import * as hobbySelectorRadio from "../redux/HobbySelectorRadio/hobbySelectorRadio.actions";

let HobbySelectorRadio = () => {

    let dispatch = useDispatch();

    let hobbyValue = useSelector((state) => {
        return state[hobbySelectorRadioFeatureKey];
    });

    let {hobby} = hobbyValue;
    
    let selectedEating = (event) => {
        dispatch(hobbySelectorRadio.selectEating(event.target.value));
    }

    let selectedCoding = (event) => {
        dispatch(hobbySelectorRadio.selectCoding(event.target.value));
    }

    let selectedSleeping = (event) => {
        dispatch(hobbySelectorRadio.selectSleeping(event.target.value));
    }



    return (
        <React.Fragment>
             <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                            <pre>{JSON.stringify(hobby)}</pre>
                                <p className="h4">HobbySelector Radio buttons</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <form>
                                            <div className="form-check">
                                                <input name="hobby" onChange={selectedEating} className="form-check-input" type="radio" value={'eating'} id='flexRadioDefault1'/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">Eating</label>
                                            </div>
                                            <div className="form-check">
                                                <input name="hobby" onChange={selectedCoding} className="form-check-input" type="radio" value={'coding'} id='flexRadioDefault2'/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">Coding</label>
                                            </div>
                                            <div className="form-check">
                                                <input name="hobby" onChange={selectedSleeping} className="form-check-input" type="radio" value={'sleeping'} id='flexRadioDefault3'/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault3">Sleeping</label>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-9">
                                        {
                                            hobby==='eating' ? 
                                            <React.Fragment>
                                                <div className="card animated jello">
                                                    <div className="card-body bg-success text-white">
                                                        <p className="h3">Eating</p>
                                                    </div>
                                                </div>
                                            </React.Fragment> : null
                                        }
                                        {
                                            hobby==='coding' ? 
                                            <React.Fragment>
                                                <div className="card animated jello">
                                                    <div className="card-body bg-primary text-white">
                                                        <p className="h3">Coding</p>
                                                    </div>
                                                </div>
                                            </React.Fragment> : null
                                        }
                                        {
                                            hobby==='sleeping' ? 
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

export default HobbySelectorRadio;