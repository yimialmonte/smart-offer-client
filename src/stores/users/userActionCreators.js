import axios from 'axios';
import * as ActionTypes from '../actionTypes';

export const signIn = (user) => ({
  type: ActionTypes.USER_SIGNIN,
  payload: user,
});

export const userLogout = (user) => ({
  type: ActionTypes.USER_LOGOUT,
  payload: user,
});

export const postSignIn = (email, password) => (dispatch) => {
  axios
    .post('http://localhost:3000/v1/users/login', {
      email,
      password,
    })
    .then((response) => {
      localStorage.setItem('auth', JSON.stringify(response.data));
      dispatch(signIn(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const postLogout = ({ token }) => (dispatch) => {
  axios
    .post(
      'http://localhost:3000/v1/users/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      dispatch(userLogout(response.data));
      localStorage.removeItem('auth');
    })
    .catch((error) => {
      console.log(error);
    });
};
