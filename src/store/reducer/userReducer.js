import * as actionTypes from "../actions/actionTypes";

export const initialState = {
  user: null,
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
    default:
      return state;
  }
};
