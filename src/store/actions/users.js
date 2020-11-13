import * as actionTypes from "./actionTypes";
import db from "../../firebase/firebase";

export const loginUser = (user) => {
  return {
    type: actionTypes.LOGIN_USER,
    payLoad: user,
  };
};

export const loginUserAsync = (user, history) => {
  return (dispatch) => {
    dispatch(isLoading(true));
    db.collection("users")
      .doc(`${user.name}`)
      .get()
      .then((doc) => {
        const dbData = { ...doc.data().info };
        console.log(doc.data());
        if (user.name === dbData.name && user.password === dbData.password) {
          dispatch(loginUser(doc.data()));
          dispatch(isLoading(false));
          history.push("/today/12");
        } else {
          dispatch(isLoading(false));
          dispatch(isError(true));
        }
      })
      .catch((error) => {
        dispatch(isLoading(false));
        dispatch(isError(true));

        console.log(error);
      });
  };
};

const isError = (data) => {
  return {
    type: actionTypes.LOGIN_USER_ERROR,
    payLoad: data,
  };
};

const isLoading = (data) => {
  return {
    type: actionTypes.IS_LOADING,
    payLoad: data,
  };
};

const registerUser = (data) => {
  return {
    type: actionTypes.REGISTER_USER,
    payLoad: data,
  };
};

export const registerUserAsync = (user, history) => {
  return (dispatch) => {
    dispatch(isLoading(true));
    db.collection("users")
      .doc(`${user.name}`)
      .set({ info: user }, { merge: true })
      .then((res) => {
        dispatch(registerUser(user.name));
        dispatch(isLoading(false));
        history.push("/today");
      })
      .catch((error) => console.log(error));
  };
};

const logout = () => {
  return {
    type: actionTypes.LOGOUT_USER,
  };
};

export const logoutAsync = () => {
  return (dispatch) => {
    dispatch(logout());
  };
};
