import React from "react";
import axios from "axios";
import {MdCancel} from "react-icons/md";
import "./addTask.scss";
import "./editProfile.scss";

import {useSelector} from "react-redux"

function EditProfile(props){

    var email = useSelector((state) => state.Email);
    //var d = new Date();
    var [name, setName] = React.useState(useSelector((state) => state.name));
    var [contact, setContact] = React.useState(useSelector(state => state.mobile));
    var [password, setPassword] = React.useState(useSelector(state => state.password));

    const  updateData = async (e) => {
      e.preventDefault();
      var data  = {email, name, contact, password};
      await axios.post("/updateEmployee", data);
      props.props();
      
    }
    
    return(
      <div className="modal">
          <button className="cancel" 
          onClick={(e) => {
            e.preventDefault();
            props.props();
          }}>
            <MdCancel size={30} color="#F21B3F"/>
          </button>
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
      </div>
    );
}

export default EditProfile;