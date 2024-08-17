import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerFeaturekey } from "../redux/Register/register.reducer";
import { registerUser } from "../redux/Register/register.actions";

let Register = () => {

    let dispatch = useDispatch();


    let [user, setUser] = useState({
        username : '',
        email : '',
        password : '',
        designation : '',
        terms : false
    });

    let updateInput = (event) => {
        if(event.target.type === 'checkbox'){
            setUser({
                ...user,
                [event.target.name] : event.target.checked,
            });
        }else{
            setUser({
                ...user,
                [event.target.name] : event.target.value,
                
            });
        }
    }




    let submitRegister = (event) => {
        event.preventDefault(); //To avoid page refresh
        //dispatch action
        dispatch(registerUser(user));
        console.log(user);
    };

    return (
        <React.Fragment>
             <div className="container mt-3">
                <pre>{JSON.stringify(user)}</pre>
                <div className="row">
                    <div className="col-m-6">
                        <div className="card m-4">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Registration</p>
                            </div>
                            <div className="card-body bg-light">
                                <form>
                                    <div className="form-group">
                                        <input name="username" onChange={updateInput} value={user.username} type="text" className="form-control" placeholder="Username"/>
                                    </div>
                                    <div className="form-group">
                                        <input name="email" onChange={updateInput} value={user.email} type="text" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input name="password" onChange={updateInput} value={user.password} type="text" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="form-group">
                                        <input name="designation" onChange={updateInput} value={user.designation} type="text" className="form-control" placeholder="Designation"/>
                                    </div>
                                    <div className="form-check">
                                    <div className="form-check">
                                        <input name="terms" onChange={updateInput} className="form-check-input" type="checkbox" value={''} id='defaultCheck1' />
                                        <label className="form-check-label" htmlFor="defaultCheck1">Term's & Conditions</label>
                                    </div>
                                    </div>
                                </form>
                                <button onClick={submitRegister} className="btn btn-secondary btn-sm">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </React.Fragment>
    );
};

export default Register;