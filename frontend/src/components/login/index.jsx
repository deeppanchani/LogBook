import React from "react";
import axios from "axios";

function Login(){
    var [password, setPassword] = React.useState("");
    var [email, setEmail] = React.useState("");
    const sendData = async(e) => {
        e.preventDefault();
        var data = {email, password};
        var response = await axios.post("/login", data);
        console.log(response);
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