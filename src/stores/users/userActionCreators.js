import axios from 'axios';
import * as ActionTypes from '../actionTypes';

export const signIn = (user) => ({
  type: ActionTypes.USER_SIGNIN,
  payload: user,
});

export const postSignIn = (email, password) => (dispatch) => {
  axios
    .post('http://localhost:3000/v1/users/login', {
      email,
      password,
    })
    .then((response) => {
      dispatch(signIn(response));
    })
    .catch((error) => {
      console.log(error);
    });
};
