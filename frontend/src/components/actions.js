export const LogInAction = () => {
  return {
    type: "Login",
  };
};

export const LogOutAction = () => {
  return {
    type: "Logout",
  };
};

export const SetEmailAction = (email) => {
  return {
    type: "SetEmail",
    payload: email,
  };
};

export const SetMobileAction = (mobile) => {
  return {
    type: "SetMobile",
    payload: mobile,
  };
};

export const SetPasswordAction = (pass) => {
  return {
    type: "SetPassword",
    payload: pass,
  };
};

export const SetNameAction = (name) => {
  return {
    type: "SetName",
    payload: name,
  };
};


export const RemoveEmailAction = () => {
  return {
    type: "RemoveEmail",
  };
};



export const SetAdminAction = () => {
  return {
    type: "SetAdmin",
  };
};

export const RemoveAdminAction = () => {
  return {
    type: "RemoveAdmin",
  };
};
