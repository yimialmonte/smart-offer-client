import * as ActionTypes from '../actionTypes';

let initialState = null;

try {
  initialState = { token: JSON.parse(localStorage.getItem('auth')) };
} catch (error) {
  initialState = { token: null };
}

const User = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_SIGNIN:
      return { ...state, token: action.payload };
    case ActionTypes.USER_LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default User;
