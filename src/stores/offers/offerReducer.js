const {
  OFFERS_LIST_REQUEST,
  OFFERS_LIST_SUCCESS,
  OFFERS_LIST_FAIL,
} = require('../actionTypes');

const offerReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case OFFERS_LIST_REQUEST:
      return { loading: true };
    case OFFERS_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case OFFERS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default offerReducer;
