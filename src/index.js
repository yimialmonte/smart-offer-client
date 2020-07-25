import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

const App = () => (
  <div>
    <Header />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
