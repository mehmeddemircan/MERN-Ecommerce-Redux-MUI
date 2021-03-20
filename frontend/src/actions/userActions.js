import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
} from "../constants/userConstants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const login = (user) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  const res = await axios.post(`/api/login`, {
    ...user,
  });

  try {
    const { token, user } = res.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        token,
        user,
      },
    });
    toast.success("Successfully logged in to website, We are happy to see you");
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.error(error);
  }
};

// it provides when you refres the page , it kept you logged in to website
export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: { error: "Failed to login" },
      });
    }
  };
};

// Logout
export const logout = () => async (dispatch) => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");

  dispatch({ type: LOGOUT_SUCCESS });
};

export const register = (user) => async (dispatch) => {
  let res;
  try {
    dispatch({ type: REGISTER_REQUEST });

    res = await axios.post("/api/register", user);

    // Success
    if (res.status >= 200 && res.status <= 205) {
      dispatch({ type: REGISTER_SUCCESS });
      //   message
      toast.success("Successfully created account , Have nice shopping day");

      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
      //   fail
    } else {
      dispatch({ type: REGISTER_FAIL });
      toast.error("Failed to register");
    }
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: { error: error.response.error },
    });
    toast.error("This email already taken");
  }
};

export const getUserDetails = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const { auth: {token} } = getState()
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    };

    const { data } = await axios.get("/api/profile/me",config);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch ({
      type: USER_DETAILS_FAIL,
      payload: error.response.data.message
    })

  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST });

    const { auth: {token} } = getState()
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    };
    const { data } = await axios.put("/api/profile/update",user,config);

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data.user,
    });
    toast.success("Successfully Updated Account !");

  } catch (error) {
    dispatch ({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: error.response.data.message
    })

  }
};
