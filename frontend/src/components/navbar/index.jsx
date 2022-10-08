import React from "react";
import blackLogo from "./Logo_Dark_Theme.svg";
import lightLogo from "./Logo_Light_Theme.svg"
import "./index.scss"

import {MdDarkMode, MdLightMode} from "react-icons/md"

function Navbar(){
    return (
      <nav className="nav">
        <div className="logos">
          <div className="singleElement">
            <img src={lightLogo} alt="" />
            <h2>LogBook</h2>
          </div>
        </div>
        <div className="display-mode">  
          <MdDarkMode className="mode-button" size={39.75}></MdDarkMode>
        </div>
      </nav>
    );
}

export default Navbar;