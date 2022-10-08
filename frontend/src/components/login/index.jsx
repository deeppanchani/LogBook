import React from "react";
import axios from "axios";

import "./index.scss"

import {useNavigate} from "react-router-dom";

import {useDispatch} from "react-redux";
import {LogInAction, SetEmailAction, SetAdminAction, RemoveAdminAction} from "../actions.js"

function Login(){
    var [password, setPassword] = React.useState("");
    var [email, setEmail] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const sendData = async(e) => {
        e.preventDefault();
        var data = {email, password};
        var response = await axios.post("/login", data);
        console.log(response);
        if(response.data === 'NO USER' || response.data === 'INVALID LOGIN'){
            alert("Wrong Credentials");
        }
        else{
            dispatch(LogInAction());
            dispatch(SetEmailAction(email));
            if(response.data.admin === true){
                dispatch(SetAdminAction());
                navigate("/admin");
            }else{
                dispatch(RemoveAdminAction())
            }



        }
    }
    return (
      <div className="form-page">
        <form action="" className="form">
          <h3 className="welcome">Welcome Back</h3>
          <br />
          <label htmlFor="email" className = "emailLabel">Email</label>
          <br />
          <input
            type="email"
            id="email"
            className = "emailInput"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password" className="password-label">Password</label>
          <br />
          <input
          required = {true}
            id = "password"
            type="password"
            placeholder=" password"
            value={password}
            className = "password-input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={sendData} className = "submitButton"> Login To LogBook </button>
        </form>
      </div>
    );
}
export default Login;