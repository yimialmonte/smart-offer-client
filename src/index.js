import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/Main';
import configureStore from './stores/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
