import * as actionTypes from "../actions/actionTypes";

export const initialState = {
  user: null,
  isLoading: false,
  isError: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      console.log(action.payLoad);
      return {
        user: action.payLoad.info.name,
      };

    case actionTypes.REGISTER_USER:
      return {
        user: action.payLoad,
      };
    case actionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.payLoad,
      };
    case actionTypes.LOGIN_USER_ERROR:
      return {
        ...state,
        isError: action.payLoad,
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
