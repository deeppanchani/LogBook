import React from "react";

function Login(){
    var [password, setPassword] = React.useState("");
    var [email, setEmail] = React.useState("");
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
                 
            </form>


        </div>
    )
}

export default Login;