import React from "react";
import blackLogo from "./Logo_Dark_Theme.svg";
import lightLogo from "./Logo_Light_Theme.svg"

function Navbar(){
    return (
        <nav className="nav">
            <img src= {lightLogo} alt=""/>
            <h2>LogBook</h2>
        </nav>
    )
}

export default Navbar;