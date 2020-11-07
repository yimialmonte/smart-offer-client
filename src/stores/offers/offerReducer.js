const { OFFERS_LIST_REQUEST, OFFERS_LIST_SUCCESS } = require('../actionTypes');

const offerReducer = (state = { offers: [], loading: true }, action) => {
  switch (action.type) {
    case OFFERS_LIST_REQUEST:
      return { loading: true };
    case OFFERS_LIST_SUCCESS:
      return { loading: false, offers: action.payload };
    default:
      return state;
  }
};

export default offerReducer;
