import React from "react";
import axios from "axios";

import "./addTask.scss";

function EditProfile(props){

    var d = new Date();
    var [name, setName] = React.useState("");
    var [contact, setContact] = React.useState("");
    var [password, setPassword] = React.useState("");

    function updateData(e){
      e.preventDefault();
      props.props();
    }
    
    return(
        <div className="addTask">
        <span><h2>Edit Profile</h2></span>
        <form action="" className="button">
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="contact">Contact Number</label>
          <br />
          <input
            type="tel"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            <br />
          <button onClick = {updateData} className="button"> Update Profile </button>
          <br />
        </form>
      </div>
    );
}

export default EditProfile;