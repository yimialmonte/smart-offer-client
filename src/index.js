import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import configureStore from './stores/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div>
      <Header />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
