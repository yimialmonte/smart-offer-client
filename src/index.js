import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

const App = () => (
  <div className="container">
    <Button color="danger">Danger!</Button>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
