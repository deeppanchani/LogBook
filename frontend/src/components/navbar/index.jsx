import React from "react";
import blackLogo from "./Logo_Dark_Theme.svg";
import lightLogo from "./Logo_Light_Theme.svg"
import "./index.scss"

import {useSelector, useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {MdDarkMode, MdLightMode} from "react-icons/md"

import {LogOutAction} from "../actions.js"
function Navbar(){

    var isLoggedIn = useSelector((state) => state.isLoggedIn);
    const dispatch = useDispatch();
    const navi = useNavigate();
    function handleLogClick(event){
      event.preventDefault();
      if(isLoggedIn){
        // console.log(" we here ");
        dispatch(LogOutAction());
        navi("/");
      }else{
        navi("/");
      }
    }

    return (
      <nav className="nav">
        <div className="logos">
          <div className="singleElement">
            <img src={lightLogo} alt="" />
            <h2>LogBook</h2>
          </div>
        </div>
        <div className="display-mode">
          {/* <MdDarkMode className="mode-button" size={35.75}></MdDarkMode> */}
          <button onClick={handleLogClick} className="LogButton button">{isLoggedIn ? "LogOut" : "LogIn"}</button>
        </div>
      </nav>
    );
}

export default Navbar;