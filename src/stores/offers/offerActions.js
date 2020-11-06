import http from '../../helper/httpRequest';
import {
  OFFERS_LIST_FAIL,
  OFFERS_LIST_REQUEST,
  OFFERS_LIST_SUCCESS,
} from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const getOffers = () => (dispatch) => {
  dispatch({ type: OFFERS_LIST_REQUEST });
  http.getRequest('offers', (respose) => {
    dispatch({ type: OFFERS_LIST_SUCCESS, payload: respose.data });
  },
  (error) => {
    dispatch({ type: OFFERS_LIST_FAIL, payload: error });
  });
};
