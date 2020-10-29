import * as actionTypes from "./actionTypes";
import db from "../../firebase/firebase";

export const isSuccess = (data) => {
  return {
    type: actionTypes.SUCCESSFULL,
    payLoad: data,
  };
};
const addTodo = (data) => {
  return {
    type: actionTypes.ADD_TODO,
    payLoad: data,
  };
};

export const saveTodoAsync = (data) => {
  return (dispatch) => {
    db.collection("users")
      .doc("pari")
      .set({ todo: data }, { merge: true })
      .then((res) => {
        dispatch(addTodo(data));
        dispatch(isSuccess(true));
      })
      .catch((error) => console.log(error));
  };
};

const getTodo = (data) => {
  return {
    type: actionTypes.GET_TODOS,
    payLoad: data,
  };
};

export const getTodoAsync = () => {
  return (dispatch) => {
    dispatch(isLoading(true));
    db.collection("users")
      .doc("pari")
      .get()
      .then((doc) => {
        dispatch(getTodo(doc.data()));
        dispatch(isLoading(false));
      })
      .catch((error) => {
        dispatch(isLoading(false));
        console.log(error);
      });
  };
};

const getTomTodo = (data) => {
  return {
    type: actionTypes.GET_TOM_TODOS,
    payLoad: data,
  };
};

export const getTomTodoAsync = () => {
  return (dispatch) => {
    dispatch(isLoading(true));
    db.collection("users")
      .doc("pari")
      .get()
      .then((doc) => {
        dispatch(getTomTodo(doc.data()));
        dispatch(isLoading(false));
      })
      .catch((error) => {
        dispatch(isLoading(false));
        console.log(error);
      });
  };
};

const saveTomTodo = (data) => {
  return {
    type: actionTypes.ADD_TOM_TODOS,
    payLoad: data,
  };
};
export const saveTomTodoAsync = (data) => {
  return (dispatch) => {
    console.log(data);
    dispatch(isLoading(true));
    db.collection("users")
      .doc("pari")
      .set({ tomTodo: data }, { merge: true })
      .then((res) => {
        dispatch(saveTomTodo(data));
        dispatch(isLoading(false));
        dispatch(isSuccess(true));
      })
      .catch((error) => console.log(error));
  };
};

export const loginUser = (user) => {
  return {
    type: actionTypes.LOGIN_USER,
    payLoad: user,
  };
};

export const loginUserAsync = (user) => {
  return (dispatch) => {
    db.collection("users")
      .doc(`${user.name}`)
      .get()
      .then((doc) => {
        console.log(doc.data());
        dispatch(loginUser(doc.data()));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const registerUser = (data) => {
  return {
    type: actionTypes.REGISTER_USER,
    payLoad: data,
  };
};

export const registerUserAsync = (user) => {
  return (dispatch) => {
    db.collection("users")
      .doc(`${user.name}`)
      .set({ info: user }, { merge: true })
      .then((res) => {
        dispatch(registerUser(user));
      })
      .catch((error) => console.log(error));
  };
};

const isLoading = (data) => {
  return {
    type: actionTypes.IS_LOADING,
    data: data,
  };
};
