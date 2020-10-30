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

export const saveTodoAsync = (data, user) => {
  return (dispatch) => {
    db.collection("users")
      .doc(`${user}`)
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

export const getTodoAsync = (user) => {
  return (dispatch) => {
    dispatch(isLoading(true));
    db.collection("users")
      .doc(`${user}`)
      .get()
      .then((doc) => {
        if (doc.data().todo) {
          dispatch(getTodo(doc.data()));
          dispatch(isLoading(false));
        } else {
          dispatch(getTodo({ todo: [] }));
          dispatch(isLoading(false));
        }
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

export const getTomTodoAsync = (user) => {
  return (dispatch) => {
    dispatch(isLoading(true));
    db.collection("users")
      .doc(`${user}`)
      .get()
      .then((doc) => {
        if (doc.data().tomTodo) {
          dispatch(getTomTodo(doc.data()));
          dispatch(isLoading(false));
        } else {
          dispatch(getTomTodo({ tomTodo: [] }));
          dispatch(isLoading(false));
        }
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
export const saveTomTodoAsync = (data, user) => {
  return (dispatch) => {
    console.log(data);
    dispatch(isLoading(true));
    db.collection("users")
      .doc(`${user}`)
      .set({ tomTodo: data }, { merge: true })
      .then((res) => {
        dispatch(saveTomTodo(data));
        dispatch(isLoading(false));
        dispatch(isSuccess(true));
      })
      .catch((error) => {
        // dispatch(saveTomTodo([]))
        console.log(error);
      });
  };
};

const isLoading = (data) => {
  return {
    type: actionTypes.IS_LOADING,
    data: data,
  };
};
