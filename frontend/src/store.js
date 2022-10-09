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
  },
});

export default store;
