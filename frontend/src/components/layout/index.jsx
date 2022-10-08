import React from "react";
import "./index.scss"
import Navbar from "../navbar";
import Login from "../login";
import AdminDashBoard from "../admin";
 import {BrowserRouter, Routes, Route } from "react-router-dom";


function Layout(){
    return (
      <BrowserRouter>
        <div>
          <Navbar />
            <Routes>
                <Route exact path = "" element = {<Login ></Login>} >
                </Route>
                <Route exact path = "/admin" element = {<AdminDashBoard></AdminDashBoard>}>
                </Route>
            </Routes>
        </div>
      </BrowserRouter>
    );
}

export default Layout;