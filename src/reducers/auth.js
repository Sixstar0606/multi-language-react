import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_USERROLE,
  GET_CURRENTUSER
} from "../actions/types.js";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { authenticated: true, user , userrole : ""}
  : { authenticated: false, user: null, userrole : "" };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        authenticated: true,
        user: payload.user,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        authenticated: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        user: payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        authenticated: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        authenticated: false,
        user: null,
      };
    case SET_USERROLE:
        return {
          ... state,
          userrole: payload
        };
    case GET_CURRENTUSER:
      return{
        ...state,
        authenticated:true,
        user:payload
      }
    default:
      return state;
  }
}
