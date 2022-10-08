import React from "react";
import axios from "axios";

import {useDispatch} from "react-redux";
import {LogInAction, SetEmailAction, SetAdminAction, RemoveAdminAction} from "../actions.js"

function Login(){
    var [password, setPassword] = React.useState("");
    var [email, setEmail] = React.useState("");
    const dispatch = useDispatch();
    const sendData = async(e) => {
        e.preventDefault();
        var data = {email, password};
        var response = await axios.post("/login", data);
        console.log(response);
        if(response.data == 'NO USER' || response.data == 'INVALID LOGIN'){
            alert("Wrong Credentials");
        }
        else{
            dispatch(LogInAction());
            dispatch(SetEmailAction(email));
            if(response.data.admin == true){
                dispatch(SetAdminAction());
            }else{
                dispatch(RemoveAdminAction())
            }

        }
    }
    return (
        <div>
            <form action="">
                <input type="email"
                placeholder="Email" 
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                />
                <br />
                <input type="password"
                placeholder=" password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                 />
                 <button onClick={sendData}> Submit Form </button>
            </form>
        </div>
    )
}
export default Login;