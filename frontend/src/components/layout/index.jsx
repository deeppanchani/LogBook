import React from "react";
import "./index.scss"
import Navbar from "../navbar";
import Login from "../login";

 import {BrowserRouter, Routes, Route } from "react-router-dom";


function Layout(){
    return (
      <BrowserRouter>
        <div>
          <Navbar />
            <Routes>
                <Route exaact path = "" element = {<Login ></Login>} >
                </Route>
            </Routes>
        </div>
      </BrowserRouter>
    );
}

export default Layout;