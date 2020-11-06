import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './users/userReducer';
import offerReducer from './offers/offerReducer';

const middleware = [thunk, logger];

const configureStore = () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      offers: offerReducer,
    }),
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  return store;
};

export default configureStore;
