import * as ActionTypes from '../actionTypes';

let initialState = null;

try {
  initialState = JSON.parse(localStorage.getItem('auth'));
} catch (error) {
  initialState = { errors: null, user: null };
}

const User = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_SIGNIN:
      return { ...state, errors: null, user: action.payload };
    default:
      return state;
  }
};

export default User;
