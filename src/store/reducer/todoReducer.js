import * as actionTypes from "../actions/actionTypes";

export const initialState = {
  todayTodos: [],
  tomorrowTodos: [],
  isLoading: false,
  sucess: false,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todayTodos: [...action.payLoad],
      };
    case actionTypes.GET_TODOS:
      console.log(action.payLoad);
      return {
        ...state,
        todayTodos: [...action.payLoad.todo],
      };

    case actionTypes.ADD_TOM_TODOS:
      return {
        ...state,
        tomorrowTodos: [...action.payLoad],
      };

    case actionTypes.GET_TOM_TODOS:
      return {
        ...state,
        tomorrowTodos: [...action.payLoad.tomTodo],
      };

    case actionTypes.SUCCESSFULL:
      return {
        ...state,
        sucess: action.payLoad,
      };

    case actionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.data,
      };
    default:
      return state;
  }
};
