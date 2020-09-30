import React, { Component } from 'react';
import AppRouter from './AppRouter';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppRouter />
    );
  }
}

export default Main;
