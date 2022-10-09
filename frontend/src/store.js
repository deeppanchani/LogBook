import { configureStore } from "@reduxjs/toolkit";

const LoginReducer = (state = false, action) => {
  switch (action.type) {
    case "Login":
      return true;
    case "Logout":
      // console.log("in reducer");
      return false;
    default:
      return state;
  }
};

const emailReducer = (state = "", action) => {
  switch (action.type) {
    case "SetEmail":
      return action.payload;
    case "RemoveEmail":
      return "";
    default:
      return state;
  }
};


const passwordReducer = (state = "", action) => {
  switch (action.type) {
    case "SetPassword":
      return action.payload;
    case "RemovePasword":
      return "";
    default:
      return state;
  }
};


const mobileReducer = (state = "", action) => {
  switch (action.type) {
    case "SetMobile":
      return action.payload;
    case "RemoveMobile":
      return "";
    default:
      return state;
  }
};

const nameReducer = (state = "", action) => {
  switch (action.type) {
    case "SetName":
      return action.payload;
    case "RemoveName":
      return "";
    default:
      return state;
  }
};

const isAdminReducer = (state = false, action) => {
  switch (action.type) {
    case "SetAdmin":
      return true;
    case "RemoveAdmin":
      return false;
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    isLoggedIn: LoginReducer,
    Email: emailReducer,
    isAdmin: isAdminReducer,
    name : nameReducer,
    password : passwordReducer,
    mobile : mobileReducer
  },
});

export default store;
