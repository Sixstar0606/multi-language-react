import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  SET_USERROLE,
  GET_CURRENTUSER
} from "./types";

import AuthService from "../util/APIUtils";

export const register = (signupRequest) => (dispatch) => {
  return AuthService.signup(signupRequest).then(
    (response) => {
      console.log("#@#########################################:", response.message);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { user : response },
      });

      // dispatch({
      //   type: SET_MESSAGE,
      //   payload: response.data.message,
      // });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response &&
          error.response.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user : data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response &&
          error.response.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      // dispatch({
      //   type: SET_MESSAGE,
      //   payload: message,
      // });

      return Promise.reject();
    }
  );
};

export const getCurrentUser = () => (dispatch) => {
  return AuthService.getCurrentUser().then(
    (data)=>{
      console.log("##################data", data);
      
      dispatch({
        type:GET_CURRENTUSER,
        payload:data
      });
      return Promise.resolve();
    }
  )
}

export const googlelogin =  (dispatch) => {
  return AuthService.googlelogin();
}
export const verify = (verify_url) => {
  console.log("#################################", verify_url);
  return AuthService.verify(verify_url);
}

export const logout = () => (dispatch) => {
  
  dispatch({
    type: LOGOUT,
  });
  localStorage.setItem("user", null)
  return;
};


export const setuserRole = (userrole) => (dispatch) => {

  dispatch({
        type : SET_USERROLE,
        payload : userrole
      });

      return Promise.resolve();
}
