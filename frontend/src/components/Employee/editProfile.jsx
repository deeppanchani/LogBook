import React from "react";
import axios from "axios";

import "./editProfile.scss";

import {useSelector} from "react-redux"

function EditProfile(props){
      
    var email = useSelector((state) => state.Email);
    var d = new Date();
    var [name, setName] = React.useState(useSelector((state) => state.name));
    var [contact, setContact] = React.useState(useSelector(state => state.mobile));
    var [password, setPassword] = React.useState(useSelector(state => state.password));

    const  updateData = async (e) => {
      e.preventDefault();
      props.props();
      var data  = {email, name, contact, password};
      console.log("we here ");
      console.log(data);
      var response = await axios.post("/updateEmployee", data);
      console.log(response);

    }
    
    return(
        <div>
        <form action="">
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
          <button onClick = {updateData}> Update Profile </button>
          <br />
        </form>
      </div>
    );
}

export default EditProfile;