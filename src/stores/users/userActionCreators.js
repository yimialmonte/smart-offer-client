import * as ActionTypes from '../actionTypes';
import http from '../../helper/httpRequest';

export const signIn = (user) => ({
  type: ActionTypes.USER_SIGNIN,
  payload: user,
});

export const userLogout = (user) => ({
  type: ActionTypes.USER_LOGOUT,
  payload: user,
});

export const postSignIn = (email, password) => (dispatch) => {
  http.postRequest(
    'users/login',
    { email, password },
    {},
    (response) => {
      localStorage.setItem('auth', JSON.stringify(response.data));
      dispatch(signIn(response.data));
    },
    (error) => console.log(error),
  );
};

export const postLogout = ({ token }) => (dispatch) => {
  const header = { headers: { Authorization: `Bearer ${token}` } };

  http.postRequest(
    'users/logout',
    {},
    header,
    (response) => {
      dispatch(userLogout(response.data));
      localStorage.removeItem('auth');
    },
    (error) => console.log(error),
  );
};
