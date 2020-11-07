import http from '../../helper/httpRequest';
import {
  OFFERS_LIST_FAIL,
  OFFERS_LIST_REQUEST,
  OFFERS_LIST_SUCCESS,
} from '../actionTypes';

const getOffers = () => (dispatch) => {
  dispatch({ type: OFFERS_LIST_REQUEST });
  http.getRequest('offers', (respose) => {
    dispatch({ type: OFFERS_LIST_SUCCESS, payload: respose.data });
  },
  (error) => {
    dispatch({ type: OFFERS_LIST_FAIL, payload: error });
  });
};

export default getOffers;
