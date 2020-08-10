import * as ActionTypes from '../actionTypes';

const User = (state = { errors: null, user: null }, action) => {
  switch (action.type) {
    case ActionTypes.USER_SIGNIN:
      return { ...state, errors: null, user: action.payload };
    default:
      return state;
  }
};

export default User;
