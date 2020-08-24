import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './users/userReducer';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
    }),
    applyMiddleware(thunk, logger),
  );

  return store;
};

export default configureStore;
